export{carrito, filtroMovile}

import{Productos} from "./arrayProductos.js"



let CarritoProductos=[]
let pantallaCarrito = document.querySelector(".container__carrito");
let containerCarrito = document.querySelector(".carrito__productos");
let acti = document.querySelector(".carrito__nav");

let result = 0;


function carrito(){

    carritoBottom()

    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){
        element.addEventListener("click",function(){

            let myID = element.id

            CarritoProductos= Productos.filter(elem => elem.id == myID)

            for(let i = 0; i< CarritoProductos.length; i++){
                sessionStorage.setItem("nombreProd", `${CarritoProductos[i].nombre}`)
                sessionStorage.setItem("precioProd", `${CarritoProductos[i].precio}`)
                sessionStorage.setItem("imgProd", `${CarritoProductos[i].img}`)

                result = suma(CarritoProductos[i].precio , result) 

                sessionStorage.setItem("precioTotal", result)

                let nombreProd = sessionStorage.getItem("nombreProd")
                let precioProd = sessionStorage.getItem("precioProd")
                let imgProd = sessionStorage.getItem("imgProd")
                
                containerCarrito.innerHTML+=`
                <div class="prodCar">
                    <div class="imgProd"><img src="${imgProd}" alt=""></div>
                    <div class="textP nombreProd"><p>${nombreProd}:</p></div>
                    <div class="textP precioProd"><p>$${precioProd}</p></div>
                    <button class="eliminar"><i class="far fa-trash-alt"></i> </button>
                </div>
                `;
                
                acti.innerHTML=`
                    <button class="vaciar">
                        <p>Vaciar Carrito</p>
                    </button>
                    <div class="total">
                        <p>Total: $ ${result}</p>
                    </div>
                `;
                console.log(result)

                acti.style.display = "inline-block"
            }
        })
    }
}



function suma(productoPrecio , result){
    return result += productoPrecio;
}

function limpiar(productoPrecio , result){
    return result += productoPrecio;
}



function carritoBottom(){
    let carrito = document.querySelector(".fa-shopping-cart");
    
    let iconCarrito = document.querySelector(".iconExit");
    

    carrito.addEventListener("click", function(){

        pantallaCarrito.style.display="inline-block";
        
    });

    iconCarrito.addEventListener("click", function(){
        pantallaCarrito.style.display="none";
    });
}



function filtroMovile(){
    let filtroMov= document.querySelector(".selec__desktop")
    let filtroBottom= document.querySelector(".select__button")
    
    let exitFiltro= document.querySelector(".exitFiltro")
    
    
    filtroBottom.addEventListener("click", function(){
        filtroMov.style.display="inline-block";
    })

    exitFiltro.addEventListener("click", function(){
        filtroMov.style.display="none";
    })


}

filtroMovile(); 
