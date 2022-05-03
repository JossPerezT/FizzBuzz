

const ExplorerService = require('../../../lib/services/ExplorerService')
const Reader = require('../../../lib/utils/Reader')

const explorers = Reader.readJsonFile('./explorers.json')


describe ('Tests de Explorer Service', ()=>{
    test('1. Filtar por mission', ()=> {
        const filtrarPorMission = ExplorerService.filterByMission(explorers, "node")
        expect(filtrarPorMission[0].score).toBe(1)
        expect(filtrarPorMission[5].githubUsername).toBe("ajolonauta11")
    })
    test('2. Conseguir cuantos explorers hay por mission', ()=>{
        const amountExplorerNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        expect(amountExplorerNode).toBe(10)
        const amountExplorerJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java")
        expect (amountExplorerJava).toBe(5)
    })

})