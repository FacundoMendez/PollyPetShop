export{carrito}
import{Productos} from "./arrayProductos.js";




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
    const popupCarrito = document.querySelector(".banderin-carrito")
    carrito.addEventListener("click", () => {
        popupCarrito.classList.toggle("carrito__active");
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



/* 

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

        element.addEventListener("click",function(e){

            contador ++
            let myID = e.target.id

            $(`#cora${myID}`).toggleClass("is-active");

            CarritoProductos= Productos.filter(elem => elem.id == myID)

            if(CarritoProductos.myID != arrayProducts.myID){
                console.log(CarritoProductos.myID)
                console.log(arrayProducts.myID)
            }

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


console.log(...arrayProducts);

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


 */













/* ejemplo profesor */



/* let carritoContador = document.querySelector(".contador")

carritoContador = 0

function carrito(){

    let totalCompra = 0;
    let totalUnidades = 0; 
    capturaBotonAgregar()

    for(const product of getStorage()){
        totalCompra += product.precio * product.cantidad; 

    }

}



function setStorage(array) {
  localStorage.setItem("carrito", JSON.stringify(array));
}

function getStorage() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}


function capturaBotonAgregar() {
    const botones = document.getElementsByClassName("prod__agregar");
    for (const boton of botones) {
      boton.addEventListener("click", (e) => {
        agregar(e.target.id);
        $(`#cora${e.target.id}`).toggleClass("is-active");
      });
    }
  }


  function agregar(id) {
    //cuando invocas la funcion dentro del evento le pasas el id que te llego
    const arrayCarrito = getStorage(); // asignacion condicional, se asigna el localStorage si existe o sino un array vacio
    const prodSelec = Productos.find((e) => e.id === id); //busco el objeto cuya propiedad coincida con el id capturado por el evento y le agrego un propiedad cantidad
    console.log(prodSelec)
    const prodCart = {
      id: prodSelec.id,
      nombre: prodSelec.nombre,
      precio: prodSelec.precio,
      img: prodSelec.img,
      cantidad: 1,
    };
    let index = arrayCarrito.findIndex((e) => e.id === id); //busco, si existe, el indice del producto seleccionado
    index == -1 ? arrayCarrito.push(prodCart) : arrayCarrito[index].cantidad++; //agrego el objeto que encontre en el paso antetior
    console.log(arrayCarrito);
    setStorage(arrayCarrito); // guardo el array nuevo dentro del storage
    renderCart(arrayCarrito, contenedorCarrito); // muestro el array carrito, en este punto podria crear un nuevo render tipo tabla, por ej
  }
  

function quitar(id) {
    const arrayFinal = JSON.parse(localStorage.getItem("carrito")).filter(
      (e) => e.id != id
    );
    setStorage(arrayFinal);
    renderCart(arrayFinal, carrito);
}

 */



