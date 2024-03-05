/*-------------------------------BOUCLES-----------------------------------*/
//Les boucles sont des structures permettant d'executer plusieurs fois des instructions

/*
  La princiaple différence entre "for et "while"; "for"est générallement utilisé lorsque le nombre d'otérations est connu à l'avance, "while"est utilisé lorque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique
*/
          //Exercice
// Boucle : for(){...}
// Boucle for qui affiche les nombres de 10 à 20
// for(let i=10; i<=20; i++ ){
// console.log(i)
// }
// Part 2 afficher les nombres pairs de 10 à 20
// for(let i=10; i<=20; i=i+2){
// console.log(i)
// }
          //Exercice
// Boucle: while(){..}
//Afficher les nombres pairs de 10 à 20
// let i=10
// while(i<=20){
//   console.log(i)
//       i=i+2
// }
    //Part 2: demandez un nombre à l'utilisateur tant que ce nombre n'est pas le bon dites le nombre est plus grand ou le nombre est plus petit
let demand= prompt("donnez moi un nombre")

while(demand !=20){
  if(demand <20){
    demand=prompt("Le nombre est plus grand, essayes encore")
  }else if(demand >20){
    demand= prompt("Le nombre est plus petit, essayes")
  }
}

// do 
// {
//   demand=prompt("donnez moi un nombre ")         
//   if(demand <20){
//     console.log('plus grand')
//   }else if(demand >20){
//     console.log('plus petit')
//   }
// }
// while(demand !=20)
//Exercice
//Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
// let calcul = prompt("Saisir un nombre entre 1 et 10");
// Si la réponse n'est pas entre 1 et 10, afficher que le message devrait être compris entre 1 et 10
// if (calcul >= 1 && calcul <= 10) {
//     let stars = '*'
//   for (let i = 0; i < calcul; i = i + 1) {
//       console.log(stars);
//     stars=stars+ "*"
//   }
// } else {
//   console.log("Le nombre doit être compris entre 1 et 10");
// }
// Le programme doit ensuite dessiner un sapin de Noel composé d'étoiles(*)
