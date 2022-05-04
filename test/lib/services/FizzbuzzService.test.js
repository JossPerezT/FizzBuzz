const FizzbuzzService = require("../../../lib/services/FizzbuzzService");

describe ("Tests de FizzBuzz", ()=>{
    test("1. Validación de Fizz", ()=>{
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3).toMatchObject({name: "Explorer3", score: 3, trick: "Fizz"});
    });
    test ("2. Validación de Buzz", ()=>{
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer5).toMatchObject({name: "Explorer5", score: 5, trick: "Buzz"});
    });
    test ("3. Valiación de trick", ()=>{
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect (explorer1).toMatchObject({name: "Explorer1", score: 1, trick: 1});
    });
    test("4. Validación de FizzBuzz", ()=>{
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer15).toMatchObject({name: "Explorer15", score: 15, trick: "FizzBuzz"});
    });
    test("5. Validación de Fizzbuzz con número", ()=>{
        const prueba5 = FizzbuzzService.applyValidationInNumber(5);
        expect(prueba5).toBe("FizzBuzz");
    });
    test("6. Validación de Fizz con número", ()=>{
        const prueba6 = FizzbuzzService.applyValidationInNumber(5);
        expect(prueba6).toBe("Fizz");
    });
    test("7. Validación de Buzz con número", ()=>{
        const prueba7 = FizzbuzzService.applyValidationInNumber(3);
        expect(prueba7).toBe("Buzz");
    });
    test("8. Validación de número", ()=>{
        const prueba8 = FizzbuzzService.applyValidationInNumber(6);
        expect(prueba8).toBe(4);
    });
});

