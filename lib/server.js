const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
    res.send("Prueba Server FizzBuzz");
});


app.listen(port,() => {
    console.log(`Server con API para FizzBuzz on port ${port}`);
});
