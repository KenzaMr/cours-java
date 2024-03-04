/*--------------------------------INSTRUCTIONS CONDITIONNELLES---------------------*/
// Les opéraeurs de comparaison (==, ===, !=,!==, >, >=, <, <=)

//Declarer une constante condition vous lui donnez en valeur un nombre 
// const condition= 18

// Verifiez si ce nombre est superieur ou egal à 18 si c'est le cas affichez vous etes majeur
// if(condition >= 18){
//     console.log("vous etes majeur")
// }
// Si la condition est vrai (truthy), le bloc d'instruction est éxécuté
//  Sinon il est ignoré

// Les opérateurs logiques OU (||) et ET (&&)

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

//Demandez un nombre 12
// number= prompt("donne moi nombre")
// If ce nombre est égale à 12
//     Bravo
// if(number==="12"){
//     console.log("Bravo")
// }else {18
//     console.log("désolé")
// }
//Vérifiez avc ==, ===

//Demandez à l'utilisateur son animal préférée
let animal= prompt("Quel est votre animal préférée?")
//si c'est un chien
    //Vous êtes quelqu'un de bien 
    switch(animal) {
        case "chien":
    console.log("Vous êtes quelqu'un de bien ")
    break
    //Si c'est un chat 
    //Quel drôle d'idée 
    case "chat":
        console.log("Quel drôle d'idée")
    break
    //Si c'est un poisson rouge 
    //Je neux plus parler avec toi 
    case "poisson rouge":
        console.log("Je n veut plus parler avec toi")
    break
    //Sinon 
    //Je n'ai pas compris la réponse 
   default:
            console.log("Je n'ai pas compris ta réponse ")
        
    }
