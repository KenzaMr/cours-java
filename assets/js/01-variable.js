/*-------------------------- VARIABLES--------------------------*/
//# ? NB!: les noms de Variables sont sensibles à la case//
/*On fait la différence entre majuscules les minuscules*/

//Déclaration de vaiable//
let uneVariable;
let UNEVARIABLE;
// Affectation d'une variable (donne une valeur à la variable)//
uneVariable = "je suis une variable"

// Les deux peuvent se faire en même temps//
let hello = 'Hello, World!'
// On peut changer une variable
hello = uneVariable
console.log(hello)

// Le mot clé const permet de déclarer une constante
// Vous ne pouvez pas modifier une constante (on dit qu'elle est immuable (elle ne peut pas changer ))
//'const' va garantir que la valeur ne soit pas modifié tout au long de l'excution du script 
const constante = "je suis une constante";
constante= 'autre chose';

//Le mot clé var permet aussi de déclarer des variables
// C'est une pratique désuété (c'était la seule façon avant 2015)
var past= 'je suis dépassée'
