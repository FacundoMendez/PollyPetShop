
$(() => {

function actualizar() {
    let precioTotal = localStorage.getItem("precioTotal");
    let arrayProductos = JSON.parse(localStorage.getItem("carrito"));
    let conta = localStorage.getItem("contador");
    let vaciar = document.querySelector(".vaciar");

    if (arrayProductos != null) {
      if (conta != null) {
        if (conta != 0) {
          if (precioTotal >= 0) {
            /* modifico el contador de la barra de navegacion */
            $(".contador p").html(`
                <p>${conta}</p>
            `);

            /* si no hay productos se muestra una pantalla, sino se muestra otra */
            $(".carrito__vacio-container").hide();
            $(".carrito__productos").show();

            for (let i = 0; i < arrayProductos.length; i++) {
              /* vacio todos los elementos del localStorage si apreto el boton */
              vaciar.addEventListener("click", function () {
                localStorage.removeItem("carrito");
                localStorage.removeItem("contador");
                localStorage.removeItem("precioTotal");

                location.reload();
              });

              /*imprimo la lista de los productos agregados  */
                $(".carrito__productos").append(`         
                    <div class="prodCar" id=${arrayProductos[i].id}>
                        <div class="imgProd"><img src="${arrayProductos[i].img}" alt=""></div>
                        <div class="textP nombreProd"><p>${arrayProductos[i].nombre}:</p></div>
                        <div class="textP precioProd" > <div class="precioProducto${arrayProductos[i].id}"><p>$ ${arrayProductos[i].precio}</p></div> </div>
                        <div class="sumaRest" > 
                            <div class="rest" id="rest${arrayProductos[i].id}"><p>-</p></div> 
                            <div class="num" id="num${arrayProductos[i].id}" ><p></p></div>  
                            <div class="sum" id="sum${arrayProductos[i].id}"><p>+</p></div> 
                        </div>
                        <button class="eliminar" id="tacho${arrayProductos[i].id}"><i class="far fa-trash-alt"></i> </button>                                                       
                    </div>
                `);
                incrementoDecremento(arrayProductos[i].id,conta);
                prodEliminar();
            }
          }
        }
      }
    }
  }

  actualizar();

  function incrementoDecremento(id, conta) {
    let suma = document.querySelector(`#sum${id} p`);
    let num = document.querySelector(`#num${id}`);
    let resta = document.querySelector(`#rest${id} p`);

    /* traigo el array donde guardo los productos */

    let arrayContador = JSON.parse(localStorage.getItem("carrito"));

    /* filtro los productos por id y me devuelve un nuevo array */
    let arrayID = arrayContador.find((e) => e.id === id);
    /* traigo el precio total del localStorage */

    /* declaro el contador que va a modificar el indicador de productos */
    let contador = arrayID.cantidad;
    num.innerHTML = contador;


    /* modifica el contador de productos +    */
    suma.addEventListener("click", function () {

      contador = contador + 1;
      num.innerHTML = contador;

      let precioTotal = localStorage.getItem("precioTotal");
      precioTotal = parseInt(precioTotal) + parseInt(arrayID.precio);

      localStorage.setItem("precioTotal", precioTotal);

      $(".precio").html(`
          $ ${precioTotal}
      `);

      conta++

      localStorage.setItem("contador", conta)


      $(".contador p").html(`
          <p>${conta}</p>
      `);
    });



    /* modifica el contador de productos -    */
    resta.addEventListener("click", function () {
      if (contador > 1) {
        contador = contador - 1;
        num.innerHTML = contador;

        let precioTotal = localStorage.getItem("precioTotal");
        precioTotal = parseInt(precioTotal) - parseInt(arrayID.precio);

        localStorage.setItem("precioTotal", precioTotal);

        $(".precio").html(`
            $ ${precioTotal}
        `);

        conta--

        localStorage.setItem("contador", conta)

        $(".contador p").html(`
            <p>${conta}</p>
        `);

      }
    });


    /* eliminar productos  */

    const tacho = $(`#tacho${id}`);
    let producto = $(`#${id}`);

    for (let element of tacho) {
      element.addEventListener("click", function () {
        let precioTotal = localStorage.getItem("precioTotal");

        let PrecioXcantidad = parseInt(arrayID.precio) * contador;

        let resut = precioTotal - PrecioXcantidad;

        localStorage.setItem("precioTotal", resut);

        $(".precio").html(`
            $ ${resut}
        `);

        producto.remove();

        conta = conta - contador

        localStorage.setItem("contador", conta)

        $(".contador p").html(`
            <p>${conta}</p>
        `);


        recorrerArray(element.id)

        if (resut == 0) {
          localStorage.removeItem("carrito");
          localStorage.removeItem("contador");
          location.reload();
        }

      });
    }
  }

  function recorrerArray(id){

    let idProd = id.substring(5)
    
    let arrayProductos = JSON.parse(localStorage.getItem("carrito"))

    let array = arrayProductos.find((e) => e.id == idProd);

    for(let i = 0; i < arrayProductos.length; i++){

      if (array = arrayProductos[i]){
        console.log(arrayProductos.indexOf(array))
      }
    }


   /*  console.log(array)
    console.log(idProd) */
    
  }





  function prodEliminar() {
    let precio = document.querySelector(".precio");
    let precioTotal = localStorage.getItem("precioTotal");

    /* muestra el precio total */
    let total = precioTotal;
    precio.innerHTML = `
        $ ${total}
    `;
    let conta = localStorage.getItem("contador")


  /* capta si hay productos muestra una pantalla sino muestra pantalla productos vacios */
    if (conta == 0) {
      localStorage.removeItem("carrito");
      localStorage.setItem("contador", conta - 1);

      $(".carrito__vacio-container").show();
      $(".carrito__productos").hide();
    }

    
    /*              $(".conejo").fadeIn().show()

                if ($(".conejo").show()){
                    $(".conejo").fadeIn().hide()
                }
 */

  }
});