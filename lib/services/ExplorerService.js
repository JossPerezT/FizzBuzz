const Reader = require("../utils/Reader");

const explorers = Reader.readJsonFile("./explorers.json");

class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission );
        return explorersInNode;

    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission );
        return explorersInNode.length;
    }
    static getExplorerUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;

    }
}


ExplorerService.filterByMission(explorers,"node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorerUsernamesByMission(explorers, "node");

module.exports = ExplorerService;