
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
    static applyValidationInNumber(number){
        if (number % 3 === 0 && number.score % 5 === 0){
            return "FizzBuzz";
        }
        else if (number % 3 === 0) {
            return "Fizz";
        } 
        else if (number % 5 === 0){
            return "Buzz";
        } 
        else {
            return number;
        }
    }
}

module.exports = FizzbuzzService;

