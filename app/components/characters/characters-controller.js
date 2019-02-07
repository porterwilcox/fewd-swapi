import CharactersService from "./characters-service.js";

let _charactersService = new CharactersService()

function drawCharacters(charArray) {
    let template = ''
    charArray.forEach(char => {
        template += char.draw()
    })
    document.querySelector(".characters").innerHTML = template
}


export default class CharactersController {
    constructor() {
        _charactersService.getCharacters(drawCharacters)
    }
}