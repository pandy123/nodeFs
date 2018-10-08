var EventEmitter = require("events")
var fs = require("fs");
// 流式读写的实现原理：继承
// 继承eventEmitter
// 实现open、destory、read、pause、resume的功能
class ReadStream extends EventEmitter { //创建ReadStream类，继承events事件
    constructor(path, options = {}) {
        super();
        //创建实例
        this.path = path; //文件路径
        this.autoClose = options.autoClose || true; //是否自动关闭，默认为true
        this.flags = options.flags || 'r'; //操作方式，默认为r
        this.encoding = options.encoding || null; //设置编码，默认buffer
        this.start = options.statr || 0; //开始读取位置，默认为0
        this.end = options.end || null; //读取结束位置，默认为null，读取到最后一位
        this.pos = this.start; //计算偏移量
        this.highWaterMark = options.highWaterMark || 64 * 1024; //最高水位线，默认64KB
        this.flowing = null; //控制当前是否流动模式
        this.buffer = Buffer.alloc(this.highWaterMark); //构建读取到的内容的buffer
        //创建可读流，调用打开文件方法
        //检查用户是否监听了data事件
        this.on('newListener', (type) => {
            if (type === 'data') { //用户监听了data事件，准备开始读取文件
                this.flowing = true; //变为流动模式
                this.read(); //执行读取文件方法
            }
        })
    }
    open() {
        fs.open(this.path, this.flags, (err, fd) => { //(文件路径,操作方式,CallBackFn(错误,文件描述符))
            if (err) {
                this.emit('error', err); //如果文件出错调用错误方法
                if (this.autoClose) { //如果设置自动关闭，文件出错将文件关闭
                    this.destroy(); //执行销毁方法(触发close事件)
                }
                return; //终止文件打开操作
            }
            this.fd = fd; //如果没错误就讲获取的fd保存起来
            this.emit('open'); //触发文件打开事件
        });
    }
    destroy() {
            if (typeof this.fd === 'number') { //判断文件是否打开过，如果打开后出错执行fs.close方法将文件关闭
                fs.close(this.fd, () => { //异步操作，文件还在监听，需要执行close事件
                    this.emit('close');
                });
                return;
            }
            this.emit('colse'); //如果没有fd证明文件没有被打开过，可以直接执行close事件
        }
        //'后面的方法都写在这里'
    read() { //同步
        if (typeof this.fd !== 'number') { //检查是否获取到fd，如果没获取到就证明文件还没被打开
            return this.once('open', () => this.read()); //如果文件没打开就继续调用自己，等文件打开后再继续执行下一步
        }
        //计算读取范围，如果没有this.end就读取到最后一位，如果有就计算偏移量
        let howMuchToRead = this.end ? Math.min(this.highWaterMark, this.end - this.pos + 1) : this.highWaterMark;
        //获取到fd后开始读取  read(文件描述符,读取到buffer,读取到buffer内的起始位置,文件的读取长度,文件内的起始位置)  bytesRead： 实际读取的字节个数长度，bufferRead: 修改后的buffer内容 
        fs.read(this.fd, this.buffer, 0, howMuchToRead, this.pos, (err, bytesRead, bufferRead) => {
            if (bytesRead > 0) { //读取到内容
                this.pos += bytesRead; //计算偏移量
                let r = this.buffer.slice(0, bytesRead); //保留有用的
                r = this.encoding ? r.toString(this.encoding) : r; //判断是否设置编码，按照指定编码转换成字符串
                this.emit('data', r); //第一次读取
                if (this.flowing) this.read(); //如果是流动的就一直读取
            } else {
                this.emit('end'); //读取完成
                this.destroy(); //销毁
            }
        });
    }
    pause() {
        this.flowing = false; //关闭流动模式
    }
    resume() {
        this.flowing = true; //开启流动模式
        this.read(); //继续读取
    }

}