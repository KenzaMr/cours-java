/*--------------------------------------Les Fonctions-------------------------------------*/
/*
Une fonction est un bloc de code réutilisable qui peut être appelé à partie d'autres parties de votre code pour effectuer une tâche spécifique.
Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus faciles à gérer. Elles permettent de réutiliser le même code plusieurs fois sans avoir à le copier-coller */

//Déclaration d'une fonction 
// function hello(x, y){
//     console.log("Bonjour "+ x + " "+ y)
// }

// hello("Kenza", "Mroudjae")

// Déclarer une fonction qui prend 3 paramétres
    // Déclare une variable TVA 
    // eLLE MULTIPLIE LES 3 NOMBRES ET LA tva 
// Appelez la fonction

function calcu(x , y ,z){
    let tva=0.20
    let solution=(x*y*z)*tva
    return solution
}
const solution1 = calcu(2, 5, 8)
console.log(solution1)
// Il est possible de sauvegarder une fonction dans une variable
// On les appeles les fonction anonymes 
const math= function(x, y){
    return x*y
}
const res = math(12,4)
console.log(res)

// Fonction addition
const add= function(x,y){
    return x+y
}
const result= add(5,9)
console.log(result)

// Arrow function (fonction fléché)
const divide = (x,y) =>{
    return x/y
}
const resulti= divide (23,7)
console.log(resulti)

//  Créer une fonctiion fléhé helloYou avec un paramétre qui affiche bonjour + Prenom
const helloYou= (x, y) =>{
    return x + y
}
const bonjour= helloYou("bonjour ", "Kenza")
console.log(bonjour)
// Il existe des façons encore plus concise 3d'écrire les fonctions fléchés
const arrow= (x) => x*2
const r= arrow(65)
console.log(r)

// Demander à l'utilisateur de rentrer un nombre 
// Créer une fonction fléché qui prend en parametre un nombre 
// Et qui affiche dans la console si le nombe est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre 
//  Appeler la fonction en lui passant le nombre 256 en parametre
// let question = prompt("Rentrez un nombre")
// function nbr (x){
//     if(question %2 ==0){
//         console.log("le nombre est pair")
//     } else {
//         console.log("le nombre est impair")
//     }
// }
// nbr(question)
// const userinput = prompt("Devines le nombre ")
// const nbr= (x) =>{
//     if(x % 2 == 0){
//         console.log("Le nombre est pair")
//     } else{
//         console.log("le nombre est impair")
//     }
// }
// nbr(userinput)
// Déclarer une variable qui contient un nombre (demandez à l'utilisateur)
// let number= prompt("Donnez-nous un nombre")
// Si le nombre est divisible par 3 afficher dans une alerte "Fizz"
// if(number%3 == 0){
//     alert("Fizz")
// }
// Si le nombre est divisible par 5 afficher dans une alerte "Buzz"
// else if(number %5 ==0 ){
//     alert("Buzz")
// }
// Si le nombre est divisible par 3 et 5 afficher dans une alerte "FizzBuzz"
// if((number %3 ==0) &&  (number%5== 0)){
//     alert("FizzBuzz")
// }
// Sinon affhicher dans une alerte le nombre
// else{
//     alert(number)
// }
                // Transformez le jeu en fonction
let varia= prompt("Choisir un nombre") 
function matho(x){
    if(x % 3 == 0 && x %5 ==0){
        console.log("FizzBuzz")
    }else if (x % 5 ==0){
        console.log("Buzz")
    }else if(x % 3 ==0){
        console.log("Fizz")
    }else {
        console.log(x)
    }
}
matho(varia)