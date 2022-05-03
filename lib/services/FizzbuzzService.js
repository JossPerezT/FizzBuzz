const Reader = require("../utils/Reader");

const explorers = Reader.readJsonFile("./explorers.json");

class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if (explorer.score % 3 === 0 && explorer.score % 5 === 0){
            explorer.trick = "FizzBuzz";
            return explorer;
        }
        
        else if (explorer.score % 3 === 0) {
            explorer.trick = "Fizz";
            return explorer;
        } 
        
        else if (explorer.score % 5 === 0){
            explorer.trick = "Buzz";
            return explorer;
        } 

        else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }
}

const explorersFizzBuzz = explorers.map((explorer)=> FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersFizzBuzz);





module.exports = FizzbuzzService;

