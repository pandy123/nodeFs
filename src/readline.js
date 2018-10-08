var fs = require('fs'),
    EventEmitter = require('events').EventEmitter,
    util = require('util');



/** 
 * 设计原则：
 * 内部input 利用 readstream 实现
 * 监听steamd的data、end、open等状态
 * 外部继承emmiterEvent 的类，对外暴露 状态、open、line、close、end
 * 
 */

/**
 * 这个是readline的构造
 * @param {*} file 
 * @param {*} opts 
 */
var readLine = function(file, opts) {
    /**
     * 当做函数用的时候，返回一个readline 的实例，
     */
    if (!(this instanceof readLine)) {
        return new readLine(file, opts);
    }

    EventEmitter.call(this);
    opts = opts || {};
    opts.maxLineLength = opts.maxLineLength || 4096; // 4K            一行的最大字节长度
    opts.retainBuffer = !!opts.retainBuffer; // 是否保持二进制输出     //do not convert to String prior to invoking emit 'line' event
    var self = this;
    // 内部公共缓冲
    var lineBuffer = new Buffer(opts.maxLineLength);
    // 一行内的缓冲长度
    var lineLength = 0;
    // 行数
    var lineCount = 0;
    // 当前读取的总字段数
    var byteCount = 0;
    var emitReady = function(lineCount, byteCount) {
        try {
            var line = lineBuffer.slice(0, lineLength);
            self.emit('line', opts.retainBuffer ? line : line.toString(), lineCount, byteCount);
        } catch (err) {
            self.emit('error', err);
        } finally {
            // 缓冲长度清零
            lineLength = 0; // Empty buffer.
        }
    };

    /**流输入 file：路径 或 读流*/
    this.input = ('string' === typeof file) ? fs.createReadStream(file, opts) : file;
    this.input.on('open', function(fd) {
            self.emit('open', fd);
        })
        .on('data', function(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i] == 10 || data[i] == 13) { // Newline char was found.
                    if (data[i] == 10) {
                        lineCount++; // 行数加一
                        emitReady(lineCount, byteCount);
                    }
                } else {
                    // 放入缓冲
                    lineBuffer[lineLength] = data[i]; // Buffer new line data.
                    lineLength++;
                }
                // 总长度
                byteCount++;
            }
        })
        .on('error', function(err) {
            self.emit('error', err);
        })
        .on('end', function() {
            // Emit last line if anything left over since EOF won't trigger it.
            if (lineLength) {
                lineCount++;
                emitReady(lineCount, byteCount);
            }
            self.emit('end');
        })
        .on('close', function() {
            self.emit('close');
        });
};
util.inherits(readLine, EventEmitter);

module.exports = readLine;