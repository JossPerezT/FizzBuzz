const ExplorerController = require('../../../lib/controllers/ExplorerController');
// const Reader = require('../utils/Reader.test')



describe("Tests para controlar la funcionalidad con el server", ()=>{
    test("1. Probando ExplorerController: GetExplorerByMission", ()=>{
        const prueba1 = ExplorerController.getExplorersByMsission("node");
        expect(prueba1).toMatchObject(
            [
                {
                    name: 'Woopa1',
                    githubUsername: 'ajolonauta1',
                    score: 1,
                    mission: 'node',
                    stacks: [ 'javascript', 'reasonML', 'elm' ]
                },
                {
                    name: 'Woopa2',
                    githubUsername: 'ajolonauta2',
                    score: 2,
                    mission: 'node',
                    stacks: [ 'javascript', 'groovy', 'elm' ]
                },
                {
                    name: 'Woopa3',
                    githubUsername: 'ajolonauta3',
                    score: 3,
                    mission: 'node',
                    stacks: [ 'elixir', 'groovy', 'reasonML' ]
                },
                {
                    name: 'Woopa4',
                    githubUsername: 'ajolonauta4',
                    mission: 'node',
                    score: 4,
                    stacks: [ 'javascript' ]
                },
                {
                    name: 'Woopa5',
                    githubUsername: 'ajolonauta5',
                    score: 5,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'elm' ]
                },
                {
                    name: 'Woopa11',
                    githubUsername: 'ajolonauta11',
                    score: 11,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
                },
                {
                    name: 'Woopa12',
                    githubUsername: 'ajolonauta12',
                    score: 12,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
                },
                {
                    name: 'Woopa13',
                    githubUsername: 'ajolonauta13',
                    score: 13,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
                },
                {
                    name: 'Woopa14',
                    githubUsername: 'ajolonauta14',
                    score: 14,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
                },
                {
                    name: 'Woopa15',
                    githubUsername: 'ajolonauta15',
                    score: 15,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
                }
            ]
        );
    });
    test ('2. Test para conseguir los Usernames por misión', ()=>{
        const prueba2 = ExplorerController.getExplorersUsernamesByMission("node");
        expect(prueba2).toMatchObject(
            [
                'ajolonauta1',
                'ajolonauta2',
                'ajolonauta3',
                'ajolonauta4',
                'ajolonauta5',
                'ajolonauta11',
                'ajolonauta12',
                'ajolonauta13',
                'ajolonauta14',
                'ajolonauta15'
            ]
        );
    });
    test('3. Test para conseguir el número de explorers que hay por misión', ()=>{
        const prueba3 = ExplorerController.getExplorersAmountByMission("node");
        expect(prueba3).toEqual(10);
    });
    test('4. Test para validar FizzBuzz en los explorers por misión ExplorerController', ()=>{
        const prueba4 = ExplorerController.getApplyValidation("node");
        expect(prueba4).toMatchObject(
            [
                {
                    name: 'Woopa1',
                    githubUsername: 'ajolonauta1',
                    score: 1,
                    mission: 'node',
                    stacks: [ 'javascript', 'reasonML', 'elm' ],
                    trick: 1
                },
                {
                    name: 'Woopa2',
                    githubUsername: 'ajolonauta2',
                    score: 2,
                    mission: 'node',
                    stacks: [ 'javascript', 'groovy', 'elm' ],
                    trick: 2
                },
                {
                    name: 'Woopa3',
                    githubUsername: 'ajolonauta3',
                    score: 3,
                    mission: 'node',
                    stacks: [ 'elixir', 'groovy', 'reasonML' ],
                    trick: 'Fizz'
                },
                {
                    name: 'Woopa4',
                    githubUsername: 'ajolonauta4',
                    mission: 'node',
                    score: 4,
                    stacks: [ 'javascript' ],
                    trick: 4
                },
                {
                    name: 'Woopa5',
                    githubUsername: 'ajolonauta5',
                    score: 5,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'elm' ],
                    trick: 'Buzz'
                },
                {
                    name: 'Woopa11',
                    githubUsername: 'ajolonauta11',
                    score: 11,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                    trick: 11
                },
                {
                    name: 'Woopa12',
                    githubUsername: 'ajolonauta12',
                    score: 12,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                    trick: 'Fizz'
                },
                {
                    name: 'Woopa13',
                    githubUsername: 'ajolonauta13',
                    score: 13,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                    trick: 13
                },
                {
                    name: 'Woopa14',
                    githubUsername: 'ajolonauta14',
                    score: 14,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                    trick: 14
                },
                {
                    name: 'Woopa15',
                    githubUsername: 'ajolonauta15',
                    score: 15,
                    mission: 'node',
                    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                    trick: 'FizzBuzz'
                }
            ]
        );
    });
});