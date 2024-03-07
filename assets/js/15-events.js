/*----------------------------------EVENTS-------------------------------*/
/*
    En javascript les évenements (events) permetent d'interargir avec les actions de l'utilisateur sur une page web, telles que le clik ou le scroll
*/
const titre= document.querySelector("#main-title")
const title2= document.querySelector("#title")
titre.addEventListener("click",function(){
    // cibler le premier h2
    // Changer la taille de la police sur 50px 
    title2.style.fontSize= "50px"
})
// Créer un event quand la souris survol le h1
titre.addEventListener("mouseover", function(){
title2.style.color= "red"
})
// "addEventListener()"permet de récupérer l'évenment (toutes les informations liées au clics)
// .target permet par exemple à récupèrer la balise HTML qui réelement été cliqué
 const allParagraphe= document.querySelector("#allP")
 allParagraphe.addEventListener("click", function(e){
    e.target.style.color = "blue"
 })
