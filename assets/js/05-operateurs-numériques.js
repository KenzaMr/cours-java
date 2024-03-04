/*------------------------------OPERATEURS ARITHMETIQUE---------------------*/
// +, -, *, /, %, **

// Déclarer une constante operation affecte l'addition de 6786786 et 78798
// Afficher en console le resultat de l'opération 
const operation = 6786786 + 78798
console.log("Le résultat de l'opération est " + operation)

//Soustraction , multiplication et division 
const soustraction = 6786786 - 78798
console.log("Le résultat de la soustraction est "+soustraction)

const multiplication = 6786786 * 78798
console.log("Le résultat de la multiplication est "+multiplication)

const division = 6786786 / 78798
console.log("Le résultat est " +division)

// operation= 10% 3 //Modulo (reste de la division)
//consolog.log( "le resultat du calcul est : ${opeartion}")


// Demander à l'ultilisateur un nombre
// Demander à l'utlisateur un deuxiéme nombre 
const response= prompt ("Donne moi un nombre ")
const response2= prompt("Donne moi un autre nombre")

// Si le nombre est divisble par le premier 
    // Affichez ce nombre est un multiple du deuxiéme 
// Sinon
    //Ce n'est pas un variable 
if(response % response2 == 0) {
    console.log(`${response2} est un multiple de ${response}`);
} else {
    console.log( "faux")
}
