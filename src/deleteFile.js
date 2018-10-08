var pathUtil = require("path")
var deleteFile = function(path, name) {
    if (fs.existsSync(path)) {
        var url;
        var stat;
        fs.readdir(path, function(err, files) {
                if (!err) {
                    for (var index in files) {
                        url = pathUtil.resolve(path, files[index])
                        if (fs.existsSync(url)) {
                            stat = fs.statSync(url)
                            if (stat.isFile()) {
                                if (files[index] == name) {
                                    fs.unlinkSync(url);
                                }
                            } else if (stat.isDirectory()) {
                                deleteFile(url, name)
                            }
                        }

                    }
                }

            })
            //   }
    }
}

deleteFile("D:/code/sk_editor_design", "source.es6.js");