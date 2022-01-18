export{carrito}

import{Productos} from "./arrayProductos.js"


let CarritoProductos = [];


function carrito(){

    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){
        element.addEventListener("click",function(){

            let myID = element.id

            CarritoProductos[element] = Productos.filter(elem => elem.id == myID)


            alert(`id: ${element.id}`)

            console.log(CarritoProductos[element])

        })
        
    }

}

