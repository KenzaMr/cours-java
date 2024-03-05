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