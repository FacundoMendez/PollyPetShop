export{carrito}

import{Productos} from "./arrayProductos.js"


class carritoAgregar{
    constructor(id,nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}




const CarritoProductos = [];



function carrito(myID){

    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){
        element.addEventListener("click",function(){

            myID = element.id

              alert(`id: ${element.id}`)

        })
    }
}


