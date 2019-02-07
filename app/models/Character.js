export default class Character {
    constructor(data) {
        this.name = data.name,
        this.gender = data.gender,
        this.height = data.height,
        this.mass = data.mass
    }

    draw() {
        return `
        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>${this.name}</h2>
                </div>
                <div class="card-body">
                    <ul class="card-body">
                        <li>Height: ${this.height}</li>
                        <li>Mass: ${this.mass}</li>
                        <li>Gender: ${this.gender}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
}