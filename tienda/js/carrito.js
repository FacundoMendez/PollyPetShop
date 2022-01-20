export{carrito}

import{Productos} from "./arrayProductos.js"



let CarritoProductos=[]


function carrito(){

    carritoBottom()

    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){
        element.addEventListener("click",function(){

            let myID = element.id

            CarritoProductos= Productos.filter(elem => elem.id == myID)


            alert(`id: ${element.id}`)

            for(let i = 0; i< CarritoProductos.length; i++){
                console.log(`NombreProd: ${CarritoProductos[i].nombre}`)
                console.log(`IdProd: ${CarritoProductos[i].id}`)
                console.log(`PrecioProd: ${CarritoProductos[i].precio}`)
                console.log(`ImagenProd: ${CarritoProductos[i].img}`)
                alert(`Producto Agregado`)
                
            }
        })
        
    }

 

}


function carritoBottom(){
    let carrito = document.querySelector(".fa-shopping-cart");
    
    let pantallaCarrito = document.querySelector(".container__carrito");
    let iconCarrito = document.querySelector(".iconExit");
    

    carrito.addEventListener("click", function(){

            pantallaCarrito.style.display="inline-block";
        
    });

    iconCarrito.addEventListener("click", function(){
        pantallaCarrito.style.display="none";
    });
}

