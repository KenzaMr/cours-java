/*-----------------------------MANIPULATION DU DOM-----------------------*/
/*
        Le DOM'Docment Object Model) en Javascript est une représentation en mémoire d'un document HTML chargé par le navigateur 
        Le DOM représente chaque élement du document comme un objet Javascript qui peut être manipulé et modifié à travers le code Javascript
*/
const mainTitle=document.getElementById("main-title");
mainTitle.style.color="red"
// ?La méthode 'getElementByTagName
/* 
 getElementsByTagName renvoi une HTMLCollection
 sur laquelle on pourra itérer avc la boucle for(){}
*/
const para=document.getElementsByTagName("p")
console.log(para)
// Faire une boucle sur l'HTMLCollection paragraphes 
for(let i=0; i< para.length;i++){
    console.log(para[i])
    para[i].style.color="red"
}
// ? La méthode "getElementsByClassName()"
const title= document.getElementsByClassName("title")
console.log(title)
for(let i=0; i<title.length; i++){
    console.log(title[i])
    title[i].style.backgroundColor="purple"
}
/*
    ?La méthode  'querySelector()'
*/
const cssProprieties= document.querySelector("#title")
    cssProprieties.style.fontSize='20px'
    console.log(cssProprieties)
/*
    ?La méthode 'querySelectorAll()'

*/
// Recupérer tous les paragraphes avc la methode querySelectorAll()
// souligner les paragraphes 
const cssProp=document.querySelectorAll('p')
console.log(cssProp)
for(let x of cssProp){
    x.style.textDecoration="underline"
}
// forEach
cssProp.forEach(function(y){
        y.style.textDecoration="underline"
})

// Selectionner tous les elements qui ont la class txt-uppercase
// tous les mettre en majuscule 
const uppercase= document.querySelectorAll('.txt-uppercase')
console.log(uppercase)
for(let y of uppercase){
    y.style.textTransform="uppercase"
}