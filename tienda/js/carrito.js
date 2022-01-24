export{carrito, filtroMovile}

import{Productos} from "./arrayProductos.js"



let CarritoProductos=[]
let pantallaCarrito = document.querySelector(".container__carrito");
let containerCarrito = document.querySelector(".carrito__productos");
let acti = document.querySelector(".carrito__nav");
let carritoContador = document.querySelector(".contador")



let nombreProd 
let precioProd 
let imgProd
let conta 



let result = 0;
let contador = 0; 

function carrito(){

    carritoBottom()
    filtroMovile(); 

    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){
        element.addEventListener("click",function(){

            contador ++

            let myID = element.id

            CarritoProductos= Productos.filter(elem => elem.id == myID)

            for(let i = 0; i< CarritoProductos.length; i++){
                localStorage.setItem("nombreProd", `${CarritoProductos[i].nombre}`)
                localStorage.setItem("precioProd", `${CarritoProductos[i].precio}`)
                localStorage.setItem("imgProd", `${CarritoProductos[i].img}`)
                localStorage.setItem("contador", `${contador}`)

                result = suma(CarritoProductos[i].precio , result) 

                localStorage.setItem("precioTotal", result)

                nombreProd = localStorage.getItem("nombreProd")
                precioProd = localStorage.getItem("precioProd")
                imgProd = localStorage.getItem("imgProd")
                conta = localStorage.getItem("contador")


                containerCarrito.innerHTML+=`
                <div class="prodCar">
                    <div class="imgProd"><img src="${imgProd}" alt=""></div>
                    <div class="textP nombreProd"><p>${nombreProd}:</p></div>
                    <div class="textP precioProd"><p>$${precioProd}</p></div>
                    <button class="eliminar"><i class="far fa-trash-alt"></i> </button>
                </div>
                `;

                carritoContador.innerHTML=`
                    <p>${conta}</p>

                `;


                acti.innerHTML=`
                    <a href="../carrito/carrito.html"><button class="vaciar">
                        <p>Comprar</p>
                    </button></a>
                    <div class="total">
                        <p>Total: $ ${result}</p>
                    </div>
                `;

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

