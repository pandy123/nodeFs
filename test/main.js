var fs = require('fs')
var assert = require('assert')

// 文件读写
//////////readfile   and  writefile
/**
 * 将文件内容完整读入缓存区，异步进行
 * function readFile(path: string | number | Buffer | URL
 */
// fs.readFile("./res/a.txt", "utf8", function(err, data) {
//     console.log(data);
// })

// /**
//  * 将文件内容完整读入缓存区， 同步进行
//  */
// var data = fs.readFileSync("./res/a.txt", "utf8")
// console.log(data);

// /**
//  *一次性全部写入 ，异步进行
//  (path: string | number | Buffer | URL
//  */
// fs.writeFile("./res/c.txt", "data location", function(err) {

// })

// /**
//  *一次性全部写入 ，同步进行
//  (path: string | number | Buffer | URL
//  */
//fs.writeFileSync("./res/d.txt", "data location");

//////////read    and    write


/**
 *打开文件  path: PathLike 
 fd 是个编号
 read或readSync方法读取文件内容是不断地将文件中的一小块内容读入缓存区，最后从该缓存区中读取文件内容，具体操作如下：
 */
//function open(path: PathLike, flags: string | number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void (+1 overload)
//function read<BinaryData>(fd: number, buffer: BinaryData, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: BinaryData) => void): void

// fs.open("./res/a.txt", "r", function(err, fd) {
//     if (!err) {
//         var buf = new Buffer(20);
//         // 一块一块的读
//         //   fs.read(fd, buf, 0, 9, 0, function(err, bytesRead, buffer) {
//         //       console.log(buf.slice(0, bytesRead).toString());
//         //   })
//         // 同步全部读入
//         // var bytesRead = fs.readFileSync(fd);
//         // console.log(bytesRead.toString());

//         // 异步 全部读入
//         fs.readFile(fd, function(err, data) {
//             console.log(data.toString());
//         })

//     } else {
//         console.err(err.toString());
//     }

// });


// fs.open("./res/e.txt", "w", function(err, fd) {
//     if (!err) {
//         var buf = new Buffer("huangddddddd  搞得定 淡淡的;/n dgeihuangd/n ");
//         // 一块一块的读 offset length start
//         //   fs.write(fd, buf, 0, 9, 0, function(err, bytesRead, buffer) {
//         //       console.log(buf.slice(0, bytesRead).toString());
//         //   })
//         // 同步全部读入
//         fs.writeFileSync(fd, buf);

//         // 异步 全部读入
//         //   fs.writeFile(fd, buf, function(err) {
//         //       if (err) {
//         //           console.log(err.toString())
//         //       }
//         //   });

//     } else {
//         console.err(err.toString());
//     }

// });

// var readStream = fs.createReadStream('./res/a.txt', { start: 0, end: 12000, highWaterMark: 100 });
// readStream.on('open', function(fd) {
//     console.log('开始读取文件');
// });
// readStream.on('data', function(data) {
//     console.log('读取到数据：');

//     console.log(data.toString());
// });
// readStream.on('end', function() {
//     console.log('文件已全部读取完毕');
// });
// readStream.on('close', function() {
//     console.log('文件被关闭');
// });
// readStream.on('error', function(err) {
//     console.log('读取文件失败');
// });

//监听writeStream对象的drain事件
// var file = fs.createReadStream('./res/a.txt');
// var out = fs.createWriteStream('./res/f.txt');
// file.on('data', function(data) {
//     out.write(data);
// });

// file.on('end', function() {
//     //将操作系统缓存区中的数据全部写入文件
//     out.end('再见', function() {
//         console.log('文件全部写入完毕');
//         console.log('共写入' + out.bytesWritten + '数据');
//     });
// });

// var out = fs.createWriteStream('./res/m.txt', { highWaterMark: 100 });
// for (var i = 0; i < 10000; i++) {
//     //返回true或false true代表缓存区已满
//     var flag = out.write(i.toString());
//     console.log(flag);
// }
// out.on('drain', function() {
//     console.log('操作系统缓存区中的数据已全部输出');
//     var out = fs.createWriteStream('./res/j.txt', { highWaterMark: 100 });
//     for (var i = 0; i < 10; i++) {
//         var flag = out.write(i.toString());
//         console.log(flag);
//     }
//     out.on('drain', function() {
//         console.log('操作系统缓存区中的数据已全部输出');
//     });
// });


// 文件状态
// fs.stat('D:/', function(err, stats) {
//     console.log("是不是文件", stats.isFile());
//     console.log("是不是目录", stats.isDirectory());
//     console.log("是不是块设备", stats.isBlockDevice());
//     console.log("是不是软连接", stats.isSymbolicLink());
//     console.log("是不是字符设备", stats.isCharacterDevice());
//     console.log("是不是socket", stats.isSocket());
//     // atime accesstime 访问时间 ，文件最后被访问的时间
//     // ctime change time 状态修改时间 ，文件的权限、拥有者、所属组、连接数等修改的生效的时间
//     // mtime modify time 修改时间 最后被修改的时间
//     console.log(stats);
// })

/**
 * // 文件截取
 */
// var buf = new Buffer.alloc(100);

// console.log("准备打开文件！");
// fs.open('./res/a.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！");
//     console.log("截取了10字节后的文件内容。");

//     // 截取文件
//     fs.ftruncate(fd, 10, function(err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("文件截取成功。");
//         console.log("读取相同的文件");
//         fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//             if (err) {
//                 console.log(err);
//             }

//             // 仅输出读取的字节
//             if (bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString());
//             }

//             // 关闭文件
//             fs.close(fd, function(err) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 console.log("文件关闭成功！");
//             });
//         });
//     });
// });

// 删除文件
// 异步删除
// fs.unlink('./res/a.txt', function(err) {

//     })
//     // 同步删除
// fs.unlinkSync('./res/b.txt')

// // 创建目录
// fs.mkdir("./res/test", function(err) {

// })
// fs.mkdirSync("./res/test2/");

// //读取目录
// fs.readdir("./res", function(err, files) {

// })

// // 删除目录
// var files = fs.readdirSync("./res");
// fs.rmdir("./res/test", function(err) {

// })
// fs.rmdirSync("./res/test2");
// fs.watchFile("./res/b.txt", { interval: 500 }, (crr, prev) => {

// })

// console.log(fs.readFileSync('./res/a.txt', 'utf8'));
// // 输出: Node.js

// // 获取要截断的文件的文件描述符
// const fd = fs.openSync('./res/a.txt', 'r+');

// // 截断文件至前4个字节
// fs.ftruncate(fd, 4, (err) => {
//     assert.ifError(err);
//     console.log(fs.readFileSync('./res/a.txt', 'utf8'));
// });
// var watcher = fs.watch("./res/b.txt", (eventType, filename) => {
//         if (filename) {
//             console.log(filename);
//         }
//     })
//     // watcher.on("change", (event, filename) => {

// // })
// watcher.on("close", (event, filename) => {

// })
// watcher.on("error", (event, filename) => {

// })

// 更改所有者权限
// fs.chown("./res/c.txt", uid, gid, function(err) {

// })

// fs.chmod("./res/c.txt", 444, function(err) {

// })

/**
 * 需要绝对路径
 */
// fs.symlink("C:/Users/huang/Desktop/nodeFs/res/c.txt", "C:/Users/huang/Desktop/nodeFs/res/mh.txt", "file", function(err) {

// })
// 返回连接的文件路径
// fs.readlink("C:/Users/huang/Desktop/nodeFs/res/mh.txt", function(err, str) {
//     console.log(str);
// })
// fs.realpath("./res/a.txt", function(err, path) {
//     console.log(path);
// })
// 修改文件的时间戳
// fs.utimes("./res/a.txt", new Date(), new Date(), function(err) {

// })

// 判断文件或路径是否存在
// fs.access("./res/dh.txt", function(err) {
//     console.log(err.code);
// })

// fs.exists("./res/a.txt", function(is) {
//     console.log(is)
// })

// todo 
//按照行读取内容
// 文件的删除、创建、更新(状态、时间、内容、权限)、移动、重新命名、创建软和硬连接、读取、写入
//文件夹的创建、删除、重新命名、遍历、修改权限、状态、移动 

// 遍历
// 遍历文件夹，处理文件
// 递归遍历文件夹，处理文件
// 遍历文件夹，处理文件夹
// 递归遍历文件夹，处理文件夹
// fs.rename("./res/a.txt", "./res/aa.txt", function(err) {

// })
// var pathUtil = require("path")
// var deleteFile = function(path, name) {
//     if (fs.existsSync(path)) {
//         var url;
//         var stat;
//         fs.readdir(path, function(err, files) {
//                 if (!err) {
//                     for (var index in files) {
//                         url = pathUtil.resolve(path, files[index])
//                         if (fs.existsSync(url)) {
//                             stat = fs.statSync(url)
//                             if (stat.isFile()) {
//                                 if (files[index] == name) {
//                                     fs.unlinkSync(url);
//                                 }
//                             } else if (stat.isDirectory()) {
//                                 deleteFile(url, name)
//                             }
//                         }

//                     }
//                 }

//             })
//             //   }
//     }
// }

// deleteFile("D:/code/sk_editor_design", "source.es6.js");

// 打开文件
// fs.open('./res/m.txt', 'r', function(err, fd) {
//     if (err) {
//         throw err;
//     }
//     console.log('open file success.');
//     var buffer = new Buffer(1000);
//     // 读取文件
//     fs.read(fd, buffer, 0, 500, 0, function(err, bytesRead, buf) {
//         if (err) {
//             throw err;
//         }
//         // 打印出buffer中存入的数据
//         console.log(bytesRead, buf.toString());
//         // 关闭文件
//         fs.close(fd);
//     });
// });
// var stream = require("stream");
// // 能够被读
// var Readable = stream.Readable;
// // 能够被写入
// var Writable = stream.Writable;
// // 能够读 也能够写，不能修改数据
// var Duplex = stream.Duplex;
// // 能偶读、 也能够写，能修改数据
// var Transform = stream.Transform;
// // 读入
// // var rs = Readable();

// let rs = fs.createReadStream('./res/c.txt', {
//     highWaterMark: 3,
//     encoding: 'utf8'
// });

// let ws = fs.createWriteStream("./res/nm.txt", { highWaterMark: 4, encoding: "utf8" });

// //rs.pipe(ws);
// // rs.on('readable', function() {
// //     // 读取的超出了界限、下次读取为null，然后触发readable, 再
// //     let char = rs.read(2);
// //     char = rs.read(2);
// //     console.log(char);
// //     //  rs.emit("test");
// // });
// rs.on("drain", function() {
//     console.log("darin");

// })
// rs.on("data", function(data) {
//     ws.write(data);
// });
// rs.on("end", function(data) {
//         console.log(data);
//     })
// rs.addListener("test", () => {
//     let char = rs.read(5);
//     console.log(char);
// });
// var m = rs.read(5);
// console.log(m);


// var pathUtil = require("path")
// var deleteFile = function(path, name) {
//     if (fs.existsSync(path)) {
//         var url;
//         var stat;
//         fs.readdir(path, function(err, files) {
//                 if (!err) {
//                     for (var index in files) {
//                         url = pathUtil.resolve(path, files[index])
//                         if (fs.existsSync(url)) {
//                             stat = fs.statSync(url)
//                             if (stat.isFile()) {
//                                 if (files[index] == name) {
//                                     fs.unlinkSync(url);
//                                 }
//                             } else if (stat.isDirectory()) {
//                                 deleteFile(url, name)
//                             }
//                         }

//                     }
//                 }

//             })
//             //   }
//     }
// }

// deleteFile("D:/code/sk_editor_design", "source.es6.js");

// var fs = require("fs");
// var path = require("path");
// // 创建文件、并且创建文件路径上的所有目录
// var createFolder = function(to) { //文件写入
//     var sep = path.sep
//     var folders = to.split(sep);
//     var p = '';
//     while (folders.length) {
//         p += folders.shift() + sep;
//         if (!fs.existsSync(p)) {
//             fs.mkdirSync(p);
//         }
//     }
// };

// var createFile = function(to) {
//     to = path.resolve(to);
//     var dir = path.dirname(to);
//     if (!fs.existsSync(dir)) {
//         createFolder(dir);
//     }
//     fs.createWriteStream(to);
// }

// createFile("C:\\Users\\huang\\Desktop\\nodeFs\\huang21\\dd\\a.txt")

var fs = require('fs');
var path = require('path');

var fileName = "b.txt";
var sourceFile = path.resolve("res", fileName);
var destPath = path.resolve("huang11", fileName);

var readStream = fs.createReadStream(sourceFile);
var writeStream = fs.createWriteStream(destPath);
readStream.pipe(writeStream);
console.log("移动完成")