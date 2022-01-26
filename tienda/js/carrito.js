export{carrito, filtroMovile}

import{Productos} from "./arrayProductos.js";

export {arrayProducts}



let pantallaCarrito = document.querySelector(".container__carrito");
let containerCarrito = document.querySelector(".carrito__productos");
let acti = document.querySelector(".carrito__nav");
let carritoContador = document.querySelector(".contador")


let result = 0;
let contador = 0; 


let arrayProducts = []
let CarritoProductos = []


function carrito(){

    carritoBottom()
    filtroMovile(); 


    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){



        element.addEventListener("click",function(){


            contador ++
            let myID = element.id
            CarritoProductos= Productos.filter(elem => elem.id == myID)

            arrayProducts= guardar(element.nombre,element.precio,element.img)
            console.log(arrayProducts)

            for(let i = 0; i< CarritoProductos.length; i++){
            

                guardar(CarritoProductos[i].nombre,CarritoProductos[i].precio,CarritoProductos[i].img)

                let conta = mostrarLocalStorage()
    
                result = suma(CarritoProductos[i].precio , result) 
            /*     console.log(result) */

                containerCarrito.innerHTML+=`
                    <div class="prodCar">
                        <div class="imgProd"><img src="${CarritoProductos[i].img}" alt=""></div>
                        <div class="textP nombreProd"><p>${CarritoProductos[i].nombre}:</p></div>
                        <div class="textP precioProd"><p>$${CarritoProductos[i].precio}</p></div>
                        <button class="eliminar"><i class="far fa-trash-alt"></i> </button>
                    </div>
                `;

                carritoContador.innerHTML=`
                    <p>${conta}</p>
                `;

                acti.innerHTML=`
                    <a href="../carrito/carrito.html"><button class="vaciar"> <p> Comprar </p> </button></a>
                    <div class="total"> <p>Total: $ ${result}</p> </div>
                `;

                acti.style.display = "inline-block"

                



            }

        })

    }
}


/* function nuevoArray(nombre,precio,img,i, arrayProducts){
    arrayProducts[i] = nombre, precio , img
}
 */


function suma(productoPrecio , result){
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


function guardar(nombre, precio, img){

    let productos = {
        nombre:  nombre,
        precio:  precio,
        img:  img
    }

    localStorage.setItem("contador", `${contador}`)

    localStorage.setItem("products", JSON.stringify(productos))

    localStorage.setItem("precioTotal", result)

}


function mostrarLocalStorage(){

    if(JSON.parse(localStorage.getItem("products"))){

        let list = JSON.parse(localStorage.getItem("products"))
        let conta = localStorage.getItem("contador")
        let precitoTotal = localStorage.getItem("precioTotal")

       /*  console.log(list)
        console.log(conta) */

        return conta
    }else{
        console.log("no existe ")
    }

}