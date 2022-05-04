const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");


const app = express();
app.use(express.json());
const port = 3000;



app.get("/", (req, res)=>{
    res.json({message: "Prueba Server FizzBuzz"});
});

app.get("/v1/explorers/:mission", (req, res)=>{
    const mission = req.params.mission;
    const explorersbyMission = ExplorerController.getExplorersByMsission(mission);
    res.json(explorersbyMission);
});
app.get("/v1/explorers/amount/:mission", (req, res) =>{
    const mission = req.params.mission;
    const amountExplorers = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: amountExplorers});
});
app.get("/v1/explorers/usernames/:mission", (req, res)=>{
    const mission = req.params.mission;
    const usernamesMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: req.params.mission, explorers: usernamesMission});
});
app.get("/v1/explorers/fizzbuzz/misiones/", (req, res) =>{
    const fizzbuzzGeneral = ExplorerController.getFizzBuzz();
    res.json(fizzbuzzGeneral);
});
app.get("/v1/explorers/fizzbuzz/misiones/:mission", (req, res)=>{
    const mission = req.params.mission;
    const fizzbuzzMission = ExplorerController.getApplyValidation(mission);
    res.json(fizzbuzzMission);
});

app.get("/v1/fizzbuzz/:score", (req, res)=>{
    const score =  req.params.score;
    const numberFizzBuzz = ExplorerController.getApplyValidationInNumber(score);
    res.json({score: req.params.score, trick: numberFizzBuzz});
});

app.listen(port,() => {
    console.log(`Server con API para FizzBuzz on port ${port}`);
});
