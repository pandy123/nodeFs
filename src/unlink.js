var fs = require("fs")
var deleteFile = function(path, name) {
    if (fs.existsSync(path)) {
        if (fs.accessSync(path)) {
            fs.readdir(path, function(err, files) {
                for (var file in files) {

                }
            })
        }

    }

}

deleteFile("./res", "a.txt");