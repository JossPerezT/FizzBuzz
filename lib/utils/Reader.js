const fs = require('fs')


class Reader {
    static readJsonFile(pat){
        const rawdata = fs.readFileSync(path)
        const explorer = JSON.parse(rawdata)
        return explorer 
    }
}

module.exports = Reader