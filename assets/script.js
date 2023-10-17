const oscuro = document.getElementById("oscuro");
const claro = document.getElementById("claro");
const body = document.getElementById("body");
const parrafo = document.getElementById("parrafo");
const titulo = document.getElementById("titulo");
const rayita = document.getElementById("rayita");
const ul = document.querySelector(".lista");
const btn = document.querySelector(".btn-cambiar-color");

rayita.addEventListener("click", () =>{
    
    ul.style.display = (ul.style.display === "flex" ? "none" : "flex"); 
    btn.style.display = (btn.style.display === "flex" ? "none" : "flex"); 
});

oscuro.addEventListener("click",activar);
claro.addEventListener("click",activar);

function activar(){
    if(this == oscuro){
        if(this.classList.add("active"));
        claro.classList.remove("active");
        body.classList.add("dark");
        parrafo.style.color = "white";
        titulo.style.color = "white";

     }
    else if(this == claro){
        if(this.classList.add("active"));
        oscuro.classList.remove("active");
        body.classList.remove("dark");
        parrafo.style.color = "#223344";
        titulo.style.color = "#223344";

    }
}
