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

// Faire une boucle sur l'HTMLCollection paragraphes 
for(let i=0; i< para.length;i++){
    para[i].style.color="red"
}
// ? La méthode "getElementsByClassName()"
const title= document.getElementsByClassName("title")

for(let i=0; i<title.length; i++){
    title[i].style.backgroundColor="purple"
}
/*
    ?La méthode  'querySelector()'
    Elle retourne un element
*/
const cssProprieties= document.querySelector("#title")
    cssProprieties.style.fontSize='20px'
/*
    ?La méthode 'querySelectorAll()'
    Elle retourne une nodelist

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
//  Quelques propriéts liées aux élements du DOM

// La propriété "style "permet de modifier le style 
mainTitle.style.textTransform="uppercase"
// mainTitle ajouter la classe txt-green
mainTitle.classList.add("txt-green")

// Cibler le p qui a la class txt-uppercase 
// Enlever la class txt-uppercase
const cssp=document.querySelector("#pp")
console.log(cssp)
cssp.classList.remove("txt-uppercase")

// Cibler le deuxiéme h2
// Verifier s'il contient la class title
const titre= document.querySelector("#title-d")
console.log(titre)
const isTitle=titre.classList.contains("title")
console.log(isTitle)
// Modifier le texte => c'est pas si dur avec de la pratique
titre.innerText="C'est pas si dur avec de la pratique innerText"
// La propriété "textContent"permet de récupérer ou de définir le contu textuel d'un élement HTML
titre.textContent="C'est pas si dur avec de la pratique" /* Utilisé celui-ci par défaut */
// La propriété innerHTML permet de récupérer ou de définir le contenu HTML d'un élement HTML(Le HTML est interprété)
titre.innerHTML="C'est pas si dur avec de la pratique inner HTML"

// Cibler le dernier paragraphe
// Et lui ajouter l'attribut title avce la valeur "Je suis une pop-up" ajouté en Javascript
const popUp= document.querySelector("#popUp")
// popUp.title="Je suis une pop up"
// popUp.setAttribute('title', 'Je suis encore une pop up')

/*
                Créer des élements
*/

// Créer un élement en Js
const newParagraphe= document.createElement("p")
newParagraphe.classList.add("new-paragraphe")
newParagraphe.textContent="Je suis un nouvel élement créer en Js"

const paragrapheContainer= document.querySelector("#allP")
// Append() ajoute un élement à la fin 
// paragrapheContainer.append(newParagraphe)
// Comment faire pour l'ajouter en haut de la div et non en bas 
paragrapheContainer.prepend(newParagraphe)
// prepend() ajoute un element au début 
