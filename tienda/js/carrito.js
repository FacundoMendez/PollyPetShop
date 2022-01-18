export{carrito}

import{Productos} from "./arrayProductos.js"


class carritoAgregar{
    constructor(id,nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


let CarritoProductos=[]
let ArrayAgregar = []


function carrito(){

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
            }
        })
        
    }

 

}

