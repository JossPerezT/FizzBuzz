const Reader = require('../../../lib/utils/Reader')


describe('Leer un archivo JSON', ()=>{
    test('1. Leer el archivo JSON', ()=>{
        const path = './../app/explorers.json'
        const explorers = Reader.readJsonFile(path)
        expect(explorers).toContain(
            "Woopa1",
            "Woopa2",
            "Woopa3",
            "Woopa4",
            "Woopa5",
            "Woopa6",
            "Woopa7",
            "Woopa8",
            "Woopa9",
            "Woopa10",
            "Woopa11",
            "Woopa12",
            "Woopa13",
            "Woopa14",
            "Woopa15"
        )
    })
})