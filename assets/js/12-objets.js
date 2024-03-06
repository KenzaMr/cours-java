/*------------------------------OBJETS-------------------------*/
// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person= {
    firstName: "Kenza",
    lastName: "Mroudjae",
    age: 23,
    formation: ["algo","HTML", "GIT", "JavaScript"],
    job: {
        name: "Stagiaire",
        hour: 35
    },
    getIdentify: function(){
        return "Je m'appelle Kenza Mroudjae"
    }

}
// Pour accéder à la propriété d'un objet
console.log(person.job.name)

// Créer un objet car 
// model => "audi"
// année de sortie (in english)=> 2010
// couleur => gris
// tableau d'option [siège chauffant, vitre électrique]
// moteur => objet {cylindre, nombre de chevaux}
// Description = function (){"Je suis une audi sortie en 2010"}

// Afficher le model 
// Afficher la premiere option 
// Afficher la description 

const car={
    model:"audi",
    releaseDate: 2010,
    couleur: "gris",
    option: ["siège chauffant", "vitre électrique"],
    moteur: {cylindre : "1.6",
            nombreDeChevaux: "5ch"},
    description: function(){
        return `Je suis une ${this.model} sortie en ${this.releaseDate}`
    }
}
console.log(car.model)
console.log(car.option[0])
console.log(car.description())

// On peut également acceder à une propriété d'un objet grace aux crochets et à sa clé en guise de valeur
console.log(car["model"])

// Pour pouvoir boucler sur un objet il faut utiliser for(...in..){} car les objets sont des énumérables
for(let key in car){
    console.log(car[key])
}
