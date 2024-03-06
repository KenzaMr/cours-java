/*-------------------------------CALLBACK-------------------------*/
// Un callback (fonvtion de rappel) est une fonction qui est passée en tant qu'argument dans une autre fonction

// FONTION ADD
const add= function(x,y){
    return x+y
}
// Fontion divide 
function divide(x,y){
    return x/y
}
// Fonction multiply 
function multiply(x,y){
    return x*y
}

function mathematics(x,y,callback){
    return callback(x,y);
}
const res= mathematics(12, 89, function(s,t){
    return s*5+t*9;
})
console.log(res);
// Une fonction peut prendre en paramétre une autre fonction
// Cela permet de rendre personnalisable 
function display(callback){
    callback();
}
const hello= function(){
    console.log("salut")
}
display(hello)
display(function(){
    console.log(23+54)
})
