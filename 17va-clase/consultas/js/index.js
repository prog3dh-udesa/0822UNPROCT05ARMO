//Batalla de superheroes

let ironMan = {
    name: 'Iron Man',
    team: 'Avengers',
    abilities: ["Volar", "Lanzar misiles", "Disparar láser"],
    energy:100,
    getPoder: function(n){
        this.energy = this.energy - 10;
        console.log(this.energy)
        console.log(this.abilities[n])
    }
}

ironMan.getPoder(2)