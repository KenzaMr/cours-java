/*------------------------Exo List-------------------*/
// Mettre un ecouteur sur le ol
// Le vrai li cliqué change de taille 20px
const liste = document.querySelector("#list");
console.log(liste);
liste.addEventListener("click", function (e) {
  e.target.style.color = "blue";
  if (e.target.style.fontSize == "" || e.target.style.fontSize == "16px") {
    e.target.style.fontSize = "20px";
  } else {
    e.target.style.fontSize = "16px";
  }
});
// Quand on double clicl sur la liste
// On va créer un élement h2 (fait)
// Le texte de ce h2 sera le texte de l'élement de la liste sur lequel on double clique
// On ajoute en haut (tout en haut avant le titre principale)
liste.addEventListener("dblclick", function (e) {
  const newh = document.createElement("h2");
  newh.textContent=e.target.textContent
  console.log(newh)
  const newAvengers= document.querySelector("#avengers")
  newAvengers.prepend(newh)
});
