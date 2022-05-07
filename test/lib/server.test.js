const supertest = require("supertest");
const {app, server} = require("../../lib/server");


const api = supertest(app);

test ("1. Información en JSON", async () => {
    const response = await api
        .get("/")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(response.body).toMatchObject({message: "Prueba Server FizzBuzz"});
});
test("2. Conseguir información de los explorers por misión Node", async () =>{
    const prueba2 = await api
        .get("/v1/explorers/node")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba2.body[1].name).toBe("Woopa2");
});
test ("3. Conseguir la información de los explores por misión Java", async () => {
    const prueba3 = await api
        .get("/v1/explorers/java")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba3.body[0].githubUsername).toBe("ajolonauta6");
});
test ("4. Conseguir la cantidad de explorers por misión Node", async () =>{
    const prueba4 = await api
        .get("/v1/explorers/amount/node")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba4.body).toMatchObject({mission: "node", quantity: 10});
});
test ("5. Conseguir la cantidad de explorers por misión Java", async () =>{
    const prueba5 = await api
        .get("/v1/explorers/amount/java")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba5.body).toMatchObject({mission: "java", quantity: 5});
});


test ("6. Conseguir los usernames de los explorers por misión Node", async () =>{
    const prueba6 = await api
        .get("/v1/explorers/usernames/node")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba6.body.explorers).toMatchObject(
        [   
            "ajolonauta1",
            "ajolonauta2",
            "ajolonauta3",
            "ajolonauta4",
            "ajolonauta5",
            "ajolonauta11",
            "ajolonauta12",
            "ajolonauta13",
            "ajolonauta14",
            "ajolonauta15"
        ]);
});

test ("7. Conseguir los usernames de los explorers por misión Java", async () =>{
    const prueba7 = await api
        .get("/v1/explorers/usernames/java")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba7.body.explorers).toMatchObject(
        [
            "ajolonauta6",
            "ajolonauta7",
            "ajolonauta8",
            "ajolonauta9",
            "ajolonauta10"
        ]);
});
test ("8. Conseguir la lista de los explorers con la validación FizzBuzz", async () =>{
    const prueba8 = await api
        .get("/v1/explorers/fizzbuzz/misiones/")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba8.body).toMatchObject(
        [        
            {"trick":1},
            {"trick":2},
            {"trick":"Fizz"},
            {"trick":4},
            {"trick":"Buzz"},
            {"trick":"Fizz"},
            {"trick":7},
            {"trick":8},
            {"trick":"Fizz"},
            {"trick":"Buzz"},
            {"trick":11},
            {"trick":"Fizz"},
            {"trick":13},
            {"trick":14},
            {"trick":"FizzBuzz"}
        ]);
});
test ("9. Conseguir la validación de los explorers por misión Node", async () =>{
    const prueba9 = await api
        .get("/v1/explorers/fizzbuzz/misiones/node")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba9.body).toMatchObject(
        [        
            {"trick": 1},
            {"trick":2},
            {"trick":"Fizz"},
            {"trick":4},
            {"trick":"Buzz"},
            {"trick":11},
            {"trick":"Fizz"},
            {"trick":13},
            {"trick":14},
            {"trick":"FizzBuzz"}
        ]
    );
});

test ("10. Conseguir la validación de los explorers por misión Java", async () =>{
    const prueba10 = await api
        .get("/v1/explorers/fizzbuzz/misiones/java")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba10.body).toMatchObject(
        [       
            {"trick": "Fizz"},
            {"trick": 7},
            {"trick": 8},
            {"trick": "Fizz"},
            {"trick": "Buzz"}
        ]
    );
});

test("11. Conseguir la validación FizzBuzz con cualqueir score", async (done) => {
    const prueba11 = await api
        .get("/v1/fizzbuzz/30")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(prueba11.body).toMatchObject({"score" :"30", "trick": "FizzBuzz"});
    done();
});

afterAll( async (done) => {
     server.close();
    done();
});