// Ciblez le button ajouter 
    // Verifie ce que je récupere 
// Ajouter un ecouteur d'évenemnt sur le bouton => le click
    // Affichez un message en console pour verifiez si l'écouteur est pris en compte
    // Créer un li
    // Le texte du li sera le texte de l'input 
    // Ciblez l'input 
    // Le texte du li sera le texte de l'input ( pas de textContent)
    // Ajoutez dans le ul 
    // Ciblez le ul 
    // Ajoutez un écouteur sur l'ul => click
    // la cible changera et sera barée (CSS)

    // Ajouter un ecouteur sur l'ul => double click
        //Supprime l'élement 
const add=document.querySelector(".button")
const toDoList=document.querySelector("#list")
console.log(toDoList)
add.addEventListener("click", function(){
    const newli= document.createElement("li")
    newli.classList.add("selection")
    const recup=document.querySelector("#input")
    if(recup.value!=""){
    newli.textContent=recup.value
    toDoList.prepend(newli)
    toDoList.addEventListener("click",function(e){
        e.target.style.textDecoration="line-through"
    })
    toDoList.addEventListener("dblclick",function(e){
        e.target.remove()})

}
})

