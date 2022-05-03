const Reader = require('../../../lib/utils/Reader')

describe('Leer un archivo JSON', ()=>{
    test('1. Leer el archivo JSON', ()=>{
        const explorers = Reader.readJsonFile('./test/lib/utils/ejemplo.json')
        expect(explorers.name).toContain("ajolonauta1")
    })
})