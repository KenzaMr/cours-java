/*---------------------------FONCTIONS TABLEAUX-------------------------*/
// Créer un tableau d'animaux ("chat", "tigre", "chien", "lion", "requin", "panda")
let animal= ["chat", "tigre", "chien", "lion", "requin", "panda"]
//? Attention la plupart des méthodes modifient le tableau de départ 
// Ajoute un ou plusieurs élements à la fin d'un tableau 
// Renvoie la nouvelle longueur du tableau
 const nouveau = animal.push("dauphin", "loup")
console.log(nouveau)

// Supprime le dernier élement du tableau
// Renvoie l'élement supprimé
const supp= animal.pop()
console.log(supp)

// Ajouter un ou plusieurs élement au début du tableau 
const ajout= animal.unshift("dragon")
console.log(ajout)

// Supprimer le premier élement du tableau 
const delet =animal.shift()
console.log(delet)

// Reorganiser le tableau de la fin vers le début 
animal.reverse()
console.log(animal)

// Modifier ou ajouter ou supprimer un élement dans un tableau 
// Ajouter un raton laveur en deuxiéme position
animal.splice(1,0, "raton laveur")
// Modifier chien en aigle
animal.splice(5,1, "aigle")
console.log(animal)
// Supprimer
animal.splice(2, 1)
console.log(animal)

//  For(...of...) permet de parcourir les élements d'un objet otérable (ex: tableau, string)
//  Sur le tableau animals faire une boucle for () pour afficher les élements du tableau 
for(let i=0; i< animal.length;i++){
    console.log(animal[i])
}
//  Sur le tableau animals faire une boucle for (...of...) pour afficher tous les élements du tableau 
for(let x of animal){
    console.log(x)
}

// foreach (){} est une méthode JavaScript qui permet d'itérer sur les élements d'un tableau 
animal.forEach(function (aniamls){
    console.log(aniamls)
})

// Déclare un tableau contenant (Paris, Berlin,Rome, Moscou, Londre, Madrid)
const city= ["Paris" ,"Berlin","Rome"," Moscou,","Londres"," Madrid"]
console.log(city)
/* Créer une fonction qui prend en paramétre un tableau:
-Rtire Madrird
-Ajoute au debbut Vienne
-Rome devient alger
-Retourne la taille du tableau */
// function ville(array){
//     array.pop()
//    array.unshift("Vienne")
//     array.splice(3,1,"Alger")
//     return array.lenght

// }
// ville(city)
// console.log()
            // Correction
const modifyArray = (array) =>{
    array.pop()
    array.unshift("Vienne")
    array.splice(3,1,"Alger")
    return array.lenght

}
