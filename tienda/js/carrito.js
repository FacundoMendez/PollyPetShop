export{carrito, filtroMovile}


import{Productos} from "./arrayProductos.js";




let pantallaCarrito = document.querySelector(".container__carrito");
let containerCarrito = document.querySelector(".carrito__productos");
let acti = document.querySelector(".carrito__nav");
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


    carritoBottom()
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


            containerCarrito.innerHTML+=`
                <div class="prodCar">
                    <div class="imgProd"><img src="${CarritoProductos[0].img}" alt=""></div>
                    <div class="textP nombreProd"><p>${CarritoProductos[0].nombre}:</p></div>
                    <div class="textP precioProd"><p>$${CarritoProductos[0].precio}</p></div>
                    <button class="eliminar" id="${CarritoProductos[0].id}"><i class="far fa-trash-alt"></i> </button>
                </div>
            `;

            carritoContador.innerHTML=`
                <p>${contador}</p>
            `;

            acti.innerHTML=`
                <a href="../carrito/carrito.html"><button class="vaciar"> <p> Comprar </p> </button></a>
                <div class="total"> <p>Total: $ ${result}</p> </div>
            `;

            acti.style.display = "inline-block"
                
            localStorage.setItem("productosCarrito", JSON.stringify(arrayProducts))
            guardar()

        })
    }
}



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


function guardar(){

    localStorage.setItem("contador", `${contador}`)

    localStorage.setItem("precioTotal", result)
}

