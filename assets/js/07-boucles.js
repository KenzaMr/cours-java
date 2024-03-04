/*-------------------------------BOUCLES-----------------------------------*/
//Les boucles sont des structures permettant d'executer plusieurs fois des instructions
//Exercice
//Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
//Si la réponse n'est pas entre 1 et 10, afficher que le message devrait être compris entre 1 et 10
let calcul;
do{
    calcul = prompt("Saisir un nombre entre 1 et 10");

}while(calcul < 1 || calcul > 10)

//Le programme doit ensuite dessiner un sapin de Noel composé d'étoiles(*)
let stars = "*";
for (let i = 0; i < calcul; i = i + 1) {
  console.log(stars);
  stars = stars + "*";
}
