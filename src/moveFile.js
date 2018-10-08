// 异步移动文件
var fs = require('fs');
var path = require('path');
var fileName = "c.txt";
var sourceFile = path.resolve("res", fileName);
var destPath = path.resolve("huang", fileName);
fs.rename(sourceFile, destPath, function(err) {
    if (err) throw err;
    fs.stat(destPath, function(err, stats) {
        if (err) throw err;
        console.log('stats: ' + JSON.stringify(stats));
    });
});



// 同步移动文件
var fs = require('fs');
var path = require('path');
var fileName = "b.txt";
var sourceFile = path.resolve("res", fileName);
var destPath = path.resolve("huang11", fileName);
var readStream = fs.createReadStream(sourceFile);
var writeStream = fs.createWriteStream(destPath);
readStream.pipe(writeStream);