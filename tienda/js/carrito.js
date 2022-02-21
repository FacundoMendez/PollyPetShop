export{carrito}
import{Productos} from "./arrayProductos.js";

/* vacio el localStorage para evitar que hayan quedado datos guardados */
localStorage.removeItem("carrito");
localStorage.removeItem("contador");
localStorage.removeItem("precioTotal");



let contador = 0; 

let carritoContador = document.querySelector(".contador")
let contadorProducto = document.querySelector(".contador_producto")
let precioTotal = document.querySelector(".precio__producto span")
let totalCompra = 0


function carrito(){

    const agregar = document.getElementsByClassName("prod__agregar");
    


    for(let produc of agregar){

        produc.addEventListener("click",function(e){

            /* incremento del icono contador  */
            contador ++
            carritoContador.innerHTML=`
                <p>${contador}</p>
            `;

            /* activar corazon de cards */
            $(`#cora${e.target.id}`).toggleClass("is-active");
           
            /* capturar ID del boton seleccionado */
            agregarProducto(e.target.id);
            
            /* mostrar cantidad de productos*/
            contadorProducto.innerHTML = (contador)

            /* mostrar precio total */
            let producto =Productos.find( elem => elem.id == e.target.id);
            totalCompra += producto.precio ;
            precioTotal.innerHTML = (`$ ${totalCompra}`);

            localStorage.setItem("precioTotal", totalCompra);
            localStorage.setItem("contador", contador);
            
        });

    };

};



function setStorage(array) {
  localStorage.setItem("carrito", JSON.stringify(array));
}

function getStorage() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
  

function agregarProducto(id ) {
  //cuando invocas la funcion dentro del evento le pasas el id que te llego
  const arrayCarrito = getStorage(); // asignacion condicional, se asigna el localStorage si existe o sino un array vacio
  const prodSelec = Productos.find((e) => e.id == id); //busco el objeto cuya propiedad coincida con el id capturado por el evento y le agrego un propiedad cantidad
  const prodCart = {
    id: prodSelec.id,
    nombre: prodSelec.nombre,
    img:prodSelec.img,
    precio: prodSelec.precio,
    cantidad: 1,
  };

  let index = arrayCarrito.findIndex((e) => e.id == id); //busco, si existe, el indice del producto seleccionado
  index == -1 ? arrayCarrito.push(prodCart) : arrayCarrito[index].cantidad++; //agrego el objeto que encontre en el paso antetior

  setStorage(arrayCarrito); // guardo el array nuevo dentro del storage
  /*  carrito(arrayCarrito, contenedorCarrito); // muestro el array carrito, en este punto podria crear un nuevo render tipo tabla, por ej */
}



/*Mostrar el banderin del carrito  */

function carritoBottom(){
    const carrito = document.querySelector(".fa-shopping-cart");
    const carrito__movil = document.querySelector(".carrito__movil");
    const filterMovil = document.querySelector(".selec");
    
    const popupCarrito = document.querySelector(".banderin-carrito")


    carrito.addEventListener("click", () => {
        popupCarrito.classList.toggle("carrito__active");
        
    });
    carrito__movil.addEventListener("click", () => {
        popupCarrito.classList.toggle("carrito__active");
        filterMovil.classList.toggle("select__button-active");
    });
}
carritoBottom()


/* filtro visual movil */

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
filtroMovile()








