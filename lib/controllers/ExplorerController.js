const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");


class ExplorerController {
    static getExplorersByMsission (mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const filterMission = ExplorerService.filterByMission(explorers, mission);
        return filterMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const usernamesByMission = ExplorerService.getExplorerUsernamesByMission(explorers, mission);
        return usernamesByMission;

    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const amountByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountByMission;
    }
    static getApplyValidation(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const filterMission = ExplorerService.filterByMission(explorers, mission);
        const validation = filterMission.map((explorer)=> FizzbuzzService.applyValidationInExplorer(explorer));
        return validation;
    }
    static getFizzBuzz (){
        const explorers = Reader.readJsonFile("./explorers.json");
        const validation = explorers.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
        return validation;
    }
}


module.exports = ExplorerController;