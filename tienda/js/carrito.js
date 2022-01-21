export{carrito, filtroMovile}

import{Productos} from "./arrayProductos.js"



let CarritoProductos=[]
let pantallaCarrito = document.querySelector(".container__carrito");
let containerCarrito = document.querySelector(".carrito__productos");

function carrito(){

    carritoBottom()

    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){
        element.addEventListener("click",function(){

            let myID = element.id

            CarritoProductos= Productos.filter(elem => elem.id == myID)

            for(let i = 0; i< CarritoProductos.length; i++){
                localStorage.setItem("nombreProd", `${CarritoProductos[i].nombre}`)
                localStorage.setItem("precioProd", `${CarritoProductos[i].precio}`)
                localStorage.setItem("imgProd", `${CarritoProductos[i].img}`)

                let nombreProd = localStorage.getItem("nombreProd")
                let precioProd = localStorage.getItem("precioProd")
                let imgProd = localStorage.getItem("imgProd")

                containerCarrito.innerHTML+=`
                <div class="prodCar">
                    <div class="imgProd"><img src="${imgProd}" alt=""></div>
                    <div class="textP nombreProd"><p>${nombreProd}:</p></div>
                    <div class="textP precioProd"><p>$${precioProd}</p></div>
                </div>
                `;

            }
        })
    }
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
