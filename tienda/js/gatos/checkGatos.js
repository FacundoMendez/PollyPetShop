import{
    crearDivsAccesoriosGato,
    crearDivsCuchasGato,
    crearDivsAlimentosGato,
    crearDivsJuguetesGato,
} from "./filtrosGatos.js"

export {
    checkGatoAccesoriosT,
    checkGato,
    checkAlimentosGatoT,
    checkJueguetesGatoT,
    checkCuchasGatoT,
}

let Alimentos = document.querySelector(".Alimentos")
let Accesorios = document.querySelector(".Accesorios")
let Juguetes = document.querySelector(".Juguetes")
let Cuchas = document.querySelector(".Cuchas")
let Gatos = document.querySelector(".Gatos")

const prod = document.getElementById("prod"); 

function crearDivsGatos(){
    crearDivsAlimentosGato();
    crearDivsCuchasGato();
    crearDivsAccesoriosGato();
    crearDivsJuguetesGato();
}

function checkGato(){
    if (Gatos.checked){
        prod.innerHTML ="";
        crearDivsGatos()
    }else{
        Gatos.addEventListener("click", function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsGatos()
            }
        });
    }
}


function checkAlimentosGatoT(){

    if (Gatos.checked){
        Alimentos.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsAlimentosGato()
        })
    }else{
        Gatos.addEventListener("click", function(){
            Alimentos.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsAlimentosGato()
                }
            });
        });
    }
    Alimentos.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsAlimentosGato()
            }
        })
    })
}


function checkGatoAccesoriosT(){
    if (Gatos.checked){
        Accesorios.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsAccesoriosGato()
        })
    }else{
        Gatos.addEventListener("click", function(){
            Accesorios.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsAccesoriosGato()
                }
            });
        });
    }
    Accesorios.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsAccesoriosGato()
            }
        })
    })
}

function checkJueguetesGatoT(){
    if (Gatos.checked){
        Juguetes.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsJuguetesGato()
        })
    }else{
        Gatos.addEventListener("click", function(){
            Juguetes.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsJuguetesGato()
                }
            });
        });
    }
    Juguetes.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsJuguetesGato()
            }
        })
    })
}

function checkCuchasGatoT(){
    if (Gatos.checked){
        Cuchas.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsCuchasGato()
        });
    }else{
        Gatos.addEventListener("click", function(){
            Cuchas.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsCuchasGato()
                }
            });
        });
    }
    Cuchas.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsCuchasGato()
            }
        })
    })
}


