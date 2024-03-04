/*-----------------------------------------Concaténation------------------------------------*/

//Concatenation: afficher du texte et des variables
//déclalrer des variables
// Age, prenom, nom de famille, adresse, formation, organisme dr formation
// J em'apple NOM PRRNOM, j'ai Age ans et je suis en formation à organisme 
let age = 23;
let nom= "Mroudjae";
let firstname= "Kenza";
let adresse = "9 promenade du gué";
let formation = "accés à la qualif";
let orga= "doranco"

console.log( "je m'appelle "+ nom + firstname +", j'ai " + age +" ans et je suis en " +formation +" à" + orga);

//Template (ou litéraux de gabarit permtet l'interpolation)
//(Interpratation de javascript au seins d'une chaine de caractére)
console.log(`Je m'appelle ${nom}  ${firstname}, j'ai ${age} ans et je suis en ${formation} à ${orga}` );

console.log('Je m\'appelle '+ nom + firstname + ', j\'ai '+ age +'ans et je suis en' + formation + ' à '+ orga);