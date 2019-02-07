import CharactersController from "./components/characters/characters-controller.js";


class App {
    constructor() {
        this.controllers = {
            charactersController: new CharactersController()
        }
    }
}

window.app = new App();