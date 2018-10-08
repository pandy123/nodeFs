//文件

fs.rename(oldPath, newPath, callback)
    //异步 rename().回调函数没有参数， 但可能抛出异常。
fs.ftruncate(fd, len, callback)
    //异步 ftruncate().回调函数没有参数， 但可能抛出异常。
fs.ftruncateSync(fd, len)
    //同步 ftruncate()
fs.truncate(path, len, callback)
    //异步 truncate().回调函数没有参数， 但可能抛出异常。
fs.truncateSync(path, len)
    //同步 truncate()
fs.chown(path, uid, gid, callback)
    //异步 chown().回调函数没有参数， 但可能抛出异常。
fs.chownSync(path, uid, gid)
    //同步 chown()
fs.fchown(fd, uid, gid, callback)
    //异步 fchown().回调函数没有参数， 但可能抛出异常。
fs.fchownSync(fd, uid, gid)
    //同步 fchown()
fs.lchown(path, uid, gid, callback)
    //异步 lchown().回调函数没有参数， 但可能抛出异常。
fs.lchownSync(path, uid, gid)
    //同步 lchown()
fs.chmod(path, mode, callback)
    //异步 chmod().回调函数没有参数， 但可能抛出异常。
fs.chmodSync(path, mode)
    //同步 chmod().
fs.fchmod(fd, mode, callback)
    //异步 fchmod().回调函数没有参数， 但可能抛出异常。
fs.fchmodSync(fd, mode)
    //同步 fchmod().
fs.lchmod(path, mode, callback)
    //异步 lchmod().回调函数没有参数， 但可能抛出异常。 Only available on Mac OS X.
fs.lchmodSync(path, mode)
    //同步 lchmod().
fs.stat(path, callback)
    //异步 stat().回调函数有两个参数 err, stats， stats 是 fs.Stats 对象。
fs.lstat(path, callback)
    //异步 lstat().回调函数有两个参数 err, stats， stats 是 fs.Stats 对象。
fs.fstat(fd, callback)
    //异步 fstat().回调函数有两个参数 err, stats， stats 是 fs.Stats 对象。
fs.statSync(path)
    //同步 stat().返回 fs.Stats 的实例。
fs.lstatSync(path)
    //同步 lstat().返回 fs.Stats 的实例。
fs.fstatSync(fd)
    //同步 fstat().返回 fs.Stats 的实例。
fs.link(srcpath, dstpath, callback)
    //异步 link().回调函数没有参数， 但可能抛出异常。
fs.linkSync(srcpath, dstpath)
    //同步 link().
fs.symlink(srcpath, dstpath[, type], callback)
    //异步 symlink().回调函数没有参数， 但可能抛出异常。 type 参数可以设置为 'dir', 'file', 或 'junction' (默认为 'file')。
fs.symlinkSync(srcpath, dstpath[, type])
    //同步 symlink().
fs.readlink(path, callback)
    //异步 readlink().回调函数有两个参数 err, linkString。
fs.realpath(path[, cache], callback)
    //异步 realpath().回调函数有两个参数 err, resolvedPath。
fs.realpathSync(path[, cache])
    //同步 realpath()。 返回绝对路径。
fs.unlink(path, callback)
    //异步 unlink().回调函数没有参数， 但可能抛出异常。
fs.unlinkSync(path)
    //同步 unlink().
fs.rmdir(path, callback)
    //异步 rmdir().回调函数没有参数， 但可能抛出异常。
fs.rmdirSync(path)
    //同步 rmdir().
fs.mkdir(path[, mode], callback)
S //异步 mkdir().回调函数没有参数， 但可能抛出异常。 mode defaults to.
fs.mkdirSync(path[, mode])
    //同步 mkdir().
fs.readdir(path, callback)
    //异步 readdir().读取目录的内容。
fs.readdirSync(path)
    //同步 readdir().返回文件数组列表。
fs.close(fd, callback)
    //异步 close().回调函数没有参数， 但可能抛出异常。
fs.closeSync(fd)
    //同步 close().
fs.open(path, flags[, mode], callback)
    //异步打开文件。
fs.openSync(path, flags[, mode])
    //同步 version of fs.open().
fs.utimes(path, atime, mtime, callback)

fs.utimesSync(path, atime, mtime)
    //修改文件时间戳， 文件通过指定的文件路径。
fs.futimes(fd, atime, mtime, callback)

fs.futimesSync(fd, atime, mtime)
    //修改文件时间戳， 通过文件描述符指定。
fs.fsync(fd, callback)
    //异步 fsync.回调函数没有参数， 但可能抛出异常。
fs.fsyncSync(fd)
    //同步 fsync.
fs.write(fd, buffer, offset, length[, position], callback)
    //将缓冲区内容写入到通过文件描述符指定的文件。
fs.write(fd, data[, position[, encoding]], callback)
    //通过文件描述符 fd 写入文件内容。
fs.writeSync(fd, buffer, offset, length[, position])
    //同步版的 fs.write()。
fs.writeSync(fd, data[, position[, encoding]])
    //同步版的 fs.write().
fs.read(fd, buffer, offset, length, position, callback)
    //通过文件描述符 fd 读取文件内容。
fs.readSync(fd, buffer, offset, length, position)
    //同步版的 fs.read.
fs.readFile(filename[, options], callback)
    //异步读取文件内容。
fs.readFileSync(filename[, options])
fs.writeFile(filename, data[, options], callback)
    //异步写入文件内容。
fs.writeFileSync(filename, data[, options])
    //同步版的 fs.writeFile。
fs.appendFile(filename, data[, options], callback)
    //异步追加文件内容。
fs.appendFileSync(filename, data[, options])
The //同步 version of fs.appendFile.
fs.watchFile(filename[, options], listener)
    //查看文件的//修改。
fs.unwatchFile(filename[, listener])
    //停止查看 filename 的//修改。
fs.watch(filename[, options][, listener])
    //查看 filename 的//修改， filename 可以是文件或目录。 返回 fs.FSWatcher 对象。
fs.exists(path, callback)
    //检测给定的路径是否存在。
fs.existsSync(path)
    //同步版的 fs.exists.
fs.access(path[, mode], callback)
    //测试指定路径用户权限。
fs.accessSync(path[, mode])
    //同步版的 fs.access。
fs.createReadStream(path[, options])
    //返回ReadStream 对象。
fs.createWriteStream(path[, options])
    //返回 WriteStream 对象。
fs.symlink(srcpath, dstpath[, type], callback)
    //异步 symlink().回调函数没有参数， 但可能抛出异常。