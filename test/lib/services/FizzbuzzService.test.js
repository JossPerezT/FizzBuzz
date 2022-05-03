const FizzbuzzService = require('../../../lib/services/FizzbuzzService')

describe ('Tests de FizzBuzz', ()=>{
    test('1. Validación de Fizz', ()=>{
        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3)
        expect(explorer3).toMatchObject({name: "Explorer3", score: 3, trick: "Fizz"})
    })
    test ('2. Validación de Buzz', ()=>{
        const explorer5 = {name: "Explorer5", score: 5}
        FizzbuzzService.applyValidationInExplorer(explorer5)
        expect(explorer5).toMatchObject({name: "Explorer5", score: 5, trick: "Buzz"})
    })
    test ('3. Valiación de trick', ()=>{
        const explorer1 = {name: "Explorer1", score: 2}
        FizzbuzzService.applyValidationInExplorer(explorer1)
        expect (explorer1).toMatchObject({name: "Explorer1", score: 1, trick: 1})
    })
})



/*

test('4. Validación de FizzBuzz', ()=>{
    const explorer15 = {name: "Explorer15", score: 15}
    FizzbuzzService.applyValidationInExplorer(explorer15)
    expect(explorer15).toMatchObject({name: "Explorer15", score: 15, trick: "FizzBuzz"})
})
*/

