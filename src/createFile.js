var fs = require("fs");
var path = require("path");
// 创建文件、并且创建文件路径上的所有目录
var createFolder = function(to) { //文件写入
    var sep = path.sep
    var folders = to.split(sep);
    var p = '';
    while (folders.length) {
        p += folders.shift() + sep;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
};

var createFile = function(to) {
    var dir = path.dirname(to);
    var stat = fs.statSync(dir);
    if (!stat.isDirectory()) {
        createFolder(dir);
    }
    fs.createWriteStream(to);
}

createFile("C:\\Users\\huang\\Desktop\\nodeFs\\huang21\\dd\\a.txt")