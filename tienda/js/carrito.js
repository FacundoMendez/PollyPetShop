export{carrito}

import{Productos} from "./arrayProductos.js"



let CarritoProductos=[]
let pantallaCarrito = document.querySelector(".container__carrito");


function carrito(){

    carritoBottom()

    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){
        element.addEventListener("click",function(){

            let myID = element.id

            CarritoProductos= Productos.filter(elem => elem.id == myID)


            alert(`id: ${element.id}`)

            for(let i = 0; i< CarritoProductos.length; i++){
                localStorage.setItem("nombreProd", `${CarritoProductos[i].nombre}`)
                localStorage.setItem("idProd", `${CarritoProductos[i].id}`)
                localStorage.setItem("precioProd", `${CarritoProductos[i].precio}`)

                let nombreProd = localStorage.getItem("nombreProd")
                let idProd = localStorage.getItem("nombreProd")
                let precioProd = localStorage.getItem("nombreProd")
                


                alert(`Producto Agregado`)
                
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


