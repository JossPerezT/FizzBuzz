const Reader = require("../../../lib/utils/Reader");

describe("Leer un archivo JSON", ()=>{
    test("1. Leer el archivo JSON", ()=>{
        const explorers = Reader.readJsonFile("./explorers.json");
        expect(explorers[0].name).toContain("Woopa1");
    });
});