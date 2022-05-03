const express = require('express');
const ExplorerController = require('./controllers/ExplorerController');


const app = express();
app.use(express.json());
const port = 3000;



app.get('/', (req, res)=>{
    res.json({message: "Prueba Server FizzBuzz"});
});

app.get('/v1/explorers/:mission', (req, res)=>{
    const mission = req.params.mission;
    const explorersbyMission = ExplorerController.getExplorersByMsission(mission);
    res.json(explorersbyMission);
});
app.get('/v1/explorers/amount/:mission', (req, res) =>{
    const mission = req.params.mission;
    const amountExplorers = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: amountExplorers});
});
app.get('/v1/explorers/usernames/:mission', (req, res)=>{
    const mission = req.params.mission;
    const usernamesMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: req.params.mission, explorers: usernamesMission});
});
app.listen(port,() => {
    console.log(`Server con API para FizzBuzz on port ${port}`);
});
