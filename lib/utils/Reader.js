const fs = require('fs')


class Reader {
    static readJsonFile (){
        const rawdata = fs.readFileSync('./app/explorers.json')
        const explorers = JSON.parse(rawdata);
    }
}

module.exports = Reader