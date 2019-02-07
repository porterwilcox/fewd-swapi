import CharactersService from "./characters-service.js";

let _charactersService = new CharactersService()

function drawCharacters(charArray) {
    let template = ''
    charArray.forEach(char => {
        template += char.draw()
    })
    document.querySelector(".characters").innerHTML = template
}


function drawPrev(src) {
    document.querySelector(".controls").innerHTML = `
    <button class="col-6" onclick="app.controllers.charactersController.newCharacterRequest('${src}')">Prev</button>
    `
}

function drawNext(src) {
    document.querySelector(".controls").innerHTML += `
    <button class="col-6" onclick="app.controllers.charactersController.newCharacterRequest('${src}')">Next</button>
    `
}


export default class CharactersController {
    constructor() {
        _charactersService.getCharacters(drawCharacters, drawPrev, drawNext)
    }

    newCharacterRequest(str) {
        let queryStr = ''
        if(str != 'null') {
            queryStr = str.substr(str.indexOf("?"))
        }
        _charactersService.getCharacters(drawCharacters, drawPrev, drawNext, queryStr)
    }
}