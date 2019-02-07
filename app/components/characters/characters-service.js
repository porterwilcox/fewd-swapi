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

    getCharacters(drawCharacters) {
        console.log('we sent the request')
        charactersApi.get('')
            .then(res => {
                console.log('swapi res', res)
                let charsFromSwapi = res.data.results
                let myChars = charsFromSwapi.map(c => {
                    return new Character(c)
                })
                drawCharacters(myChars)
            })
            .catch(e => console.error(e))
        console.log("we're waiting for the response")        
    }
}