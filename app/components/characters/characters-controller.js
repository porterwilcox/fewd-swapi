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
    <button class="col-6" onclick="${app.controllers.charactersController.prev(src)}">Prev</button>
    `
}

function drawNext(src) {
    document.querySelector(".controls").innerHTML += `
    <button class="col-6" onclick="${app.controllers.charactersController.next(src)}">Next</button>
    `
}


export default class CharactersController {
    constructor() {
        _charactersService.getCharacters(drawCharacters, drawPrev, drawNext)
    }

    prev() {}
    next() {}
}