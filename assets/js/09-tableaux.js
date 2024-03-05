/*--------------------------TABLEAUX--------------------------*/
/*
    Un tableau (array) est un type de donnée qui peut contenir plusieurs élements. On peu tcréer un tableau en utlisant des crochets [] et en y insérants les élements séparés par des virgules 
*/
// Créer un tableau avec tous le smois de l'année
let month=["janvier","février","mars", "avril", "mai", "juin", "juillet","septembre", "ocotobre", "novembre", "décembre"]
// Afficher en console janvier et décembre
console.log(month [0], month[10])
// Afficher tous les mois de l'année avec une boucle 

for(let i=0; i < month.length ; i=i+1){
    console.log(month [i])
}
// Transformer cette boucle en fonction sans parametre 
function calendar(){
    for(let i=0; i < month.length ; i=i+1){
        console.log(month[i])
    }
}
calendar()