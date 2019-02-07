//the methods
    // HTTP Verb	CRUD
    // GET	        Read
    // POST	        Create
    // PUT	        Update
    // DELETE	    Delete

import Character from "../../models/Character.js"

//Axios instance
let charactersApi = axios.create({
    baseURL: 'https://swapi.co/api/people/',
    timeout: 5000
})


export default class CharactersService{
    constructor() { }

    get characters() {
        return _characters.map(c => c)
    }

    getCharacters(drawCharacters, drawPrev, drawNext, queryStr) {
        console.log('we sent the request')
        if(!queryStr) {
            queryStr = ''
        }
        charactersApi.get(`${queryStr}`)
            .then(res => {
                console.log('swapi res', res)
                let charsFromSwapi = res.data.results
                let myChars = charsFromSwapi.map(c => {
                    return new Character(c)
                })
                drawCharacters(myChars)
                let prev = res.data.previous
                let next = res.data.next
                drawPrev(prev)
                drawNext(next)
            })
            .catch(e => console.error(e))
        console.log("we're waiting for the response")        
    }
}