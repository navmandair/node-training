const fs = require('fs')

const filterDir = (path, type, callback) => {
    fs.readdir(path, (err, data) => {
        if(err) {
            callback(err, null)
        } else {
            const list = data.filter(item => item.endsWith('.' + type))
            callback(null, list);
        }
        return;
    })
}


module.exports = filterDir;