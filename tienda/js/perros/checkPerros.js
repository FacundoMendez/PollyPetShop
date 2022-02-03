import{
    crearDivsAccesoriosPerro,
    crearDivsAlimentosPerro,
    crearDivsCuchasPerro,
    crearDivsJuguetesPerro,
} from "./filtrosPerros.js";

export{
    checkPerro,
    checkCuchasPerroT,
    checkJueguetesPerroT,
    checkPerroAccesoriosT,
    checkAlimentosPerrosT,
}

function crearDivsPerros(){
    crearDivsAlimentosPerro();
    crearDivsCuchasPerro();
    crearDivsAccesoriosPerro();
    crearDivsJuguetesPerro();
}


let Alimentos = document.querySelector(".Alimentos")
let Accesorios = document.querySelector(".Accesorios")
let Juguetes = document.querySelector(".Juguetes")
let Cuchas = document.querySelector(".Cuchas")
let Perros = document.querySelector(".Perros")

const prod = document.getElementById("prod"); 


function checkPerro(){
    if (Perros.checked){
        prod.innerHTML ="";
        crearDivsPerros()
    }else{
        Perros.addEventListener("click", function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsPerros()
            }
        });
    }
}




function checkJueguetesPerroT(){
    if (Perros.checked){
        Juguetes.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsJuguetesPerro()
        });
    }else{
        Perros.addEventListener("click", function(){
            Juguetes.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsJuguetesPerro()
                }
            });
        });
    }
    Juguetes.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsJuguetesPerro()
            }
        })
    });
}




function checkPerroAccesoriosT(){
    if (Perros.checked){
        Accesorios.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsAccesoriosPerro()
        });
    }else{
        Perros.addEventListener("click", function(){
            Accesorios.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsAccesoriosPerro()
                }
            });
        });
    }
    Accesorios.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsAccesoriosPerro()
            }
        })
    });

}

function checkAlimentosPerrosT(){
    if (Perros.checked){
        Alimentos.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsAlimentosPerro()
        });
    }else{
        Perros.addEventListener("click", function(){
            Alimentos.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsAlimentosPerro()
                }
            });
        });
    }
    Alimentos.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsAlimentosPerro()
            }
        })
    })
}

function checkCuchasPerroT(){
    
    if (Perros.checked){
        Cuchas.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsCuchasPerro()
        })
    }else{
        Perros.addEventListener("click", function(){
            Cuchas.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsCuchasPerro()
                }
            });
        });
    }
    Cuchas.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsAlimentosPerro()
            }
        })
    })
}



