export{
    checkAlimentos,
    checkJuguetes,
    checkCuchas,
    checkAccesorios,
    checkTodosLosProductos,
}


import{
    crearDivsCuchas,
    crearDivsJuguetes,
    crearDivsAccesorios,
    crearDivsAlimentos,
    crearDivsTodo
} from "./filters.js"


let Alimentos = document.querySelector(".Alimentos")
let Accesorios = document.querySelector(".Accesorios")
let Juguetes = document.querySelector(".Juguetes")
let Cuchas = document.querySelector(".Cuchas")
let TodosLosProductos = document.querySelector(".TodosProductos")

const prod = document.getElementById("prod"); 


function checkAlimentos(){
    if (Alimentos.checked){
        prod.innerHTML ="";
        crearDivsAlimentos()
    }else{
        Alimentos.addEventListener("click", function(){
            if (Alimentos.checked){
                prod.innerHTML ="";
                crearDivsAlimentos()
            }
        });
    }
}

function checkJuguetes(){
    if (Juguetes.checked){
        prod.innerHTML ="";
        crearDivsJuguetes()
    }else{
        Juguetes.addEventListener("click", function(){
            if (Juguetes.checked){
                prod.innerHTML ="";
                crearDivsJuguetes()
            }
        });
    }
}

function checkCuchas(){
    if (Cuchas.checked){
        prod.innerHTML ="";
        crearDivsCuchas()
    }else{
        Cuchas.addEventListener("click", function(){
            if (Cuchas.checked){
                prod.innerHTML ="";
                crearDivsCuchas()
            }
        });
    }
}

function checkAccesorios(){
    if (Accesorios.checked){
        prod.innerHTML ="";
        crearDivsAccesorios()
    }
    else{
        Accesorios.addEventListener("click", function(){
            if (Accesorios.checked){
                prod.innerHTML ="";
                crearDivsAccesorios()
            }
        });
    }
    
}

function checkTodosLosProductos(){
    if (TodosLosProductos.checked){
        prod.innerHTML ="";
        crearDivsTodo();
    }else{
        TodosLosProductos.addEventListener("click", function(){
            if (TodosLosProductos.checked){
                prod.innerHTML ="";
                crearDivsTodo();
            }
        });
    }
}