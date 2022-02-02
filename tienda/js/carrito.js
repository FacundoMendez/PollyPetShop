export{carrito}


import{Productos} from "./arrayProductos.js";




let pantallaCarrito = document.querySelector(".container__carrito");
let carritoContador = document.querySelector(".contador")


let result = 0;
let contador = 0; 


let CarritoProductos = []


class contenedorCarrito {
    constructor( nombre, precio, img, id){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.id = id;
    }

}


function carrito(){
    let arrayProducts = []
    filtroMovile(); 


    const agregar = document.getElementsByClassName("prod__agregar");

    for(let element of agregar){


        element.addEventListener("click",function(){


            contador ++
            let myID = element.id

            $(`#cora${myID}`).toggleClass("is-active");


            CarritoProductos= Productos.filter(elem => elem.id == myID)

            arrayProducts.push(new contenedorCarrito(CarritoProductos[0].nombre, CarritoProductos[0].precio, CarritoProductos[0].img, CarritoProductos[0].id) )

            result = suma(CarritoProductos[0].precio , result) 


            carritoContador.innerHTML=`
                <p>${contador}</p>
            `;
           

            localStorage.setItem("productosCarrito", JSON.stringify(arrayProducts))
            guardar()
            modifiCarrito(result,contador)
        })
    }
}



function suma(productoPrecio , result){
    return result += productoPrecio;
}



function carritoBottom(){
    const carrito = document.querySelector(".fa-shopping-cart");
    const popupCarrito = document.querySelector(".container__carrito")

    
    carrito.addEventListener("click", () => {
        popupCarrito.classList.toggle("carrito__active");
    });
}
carritoBottom()

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

function guardar(){

    localStorage.setItem("contador", `${contador}`)

    localStorage.setItem("precioTotal", result)
}

function modifiCarrito(result,contador){
    let precio = document.querySelector(".precio__producto")
    let contadorProducto = document.querySelector(".contador_producto")

    contadorProducto.innerHTML = (contador)

    precio.innerHTML = (`($ ${result})`)
}