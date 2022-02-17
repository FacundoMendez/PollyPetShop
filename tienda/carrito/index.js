
$(() => {

    function actualizar() {
        let precioTotal = localStorage.getItem("precioTotal");
        let arrayProductos = JSON.parse(localStorage.getItem("carrito"));
        let conta = localStorage.getItem("contador");
        let vaciar = document.querySelector(".vaciar");

        
        if(arrayProductos != null){
            if (conta != null) {
                if (conta != 0) {
                    if(precioTotal >= 0){

                        /* modifico el contador de la barra de navegacion */
                        $(".contador p").html(`
                                <p>${conta}</p>
                            `);
                    
                        /* si no hay productos se muestra una pantalla, sino se muestra otra */
                        $(".carrito__vacio-container").hide();
                        $(".carrito__productos").show();

                        for (let i = 0; i < arrayProductos.length; i++) {

                            /* vacio todos los elementos del localStorage si apreto el boton */
                            vaciar.addEventListener("click", function(){
                                localStorage.removeItem("carrito");
                                localStorage.removeItem("contador")
                                localStorage.removeItem("precioTotal")
            
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
                                <button class="eliminar" id="${arrayProductos[i].id}"><i class="far fa-trash-alt"></i> </button>                                                       
                            </div>
                                
                            `); 

                            sum(arrayProductos[i].id);
                            prodEliminar(conta);
                        };
                    };
                };
            };
        };
    };
    
    actualizar();





function sum(id){
        

    let suma = document.querySelector(`#sum${id} p`)
    let num = document.querySelector(`#num${id}`)
    let resta = document.querySelector(`#rest${id} p`)
    
    /* traigo el array donde guardo los productos */
    let arrayContador = JSON.parse(localStorage.getItem("carrito"));
    /* filtro los productos por id y me devuelve un nuevo array */
    let arrayID = arrayContador.find(e => e.id === id)
    /* traigo el precio total del localStorage */

    /* declaro el contador que va a modificar el indicador de productos */
    let contador = arrayID.cantidad;
    num.innerHTML=contador


    suma.addEventListener("click", function(){
        
        
        /* modifica el contador de productos +-    */
        contador = contador +1

        arrayID.cantidad = contador

        num.innerHTML= (contador)
        

        let precioTotal = localStorage.getItem("precioTotal")
        precioTotal = parseInt(precioTotal) + parseInt(arrayID.precio)

        localStorage.setItem("precioTotal", precioTotal)

        localStorage.setItem("carrito", JSON.stringify(arrayID))



        $(".precio").html(`
            $ ${precioTotal}
        `);


    })


    resta.addEventListener("click", function(){
        if(contador > 1){
            contador = contador -1
            num.innerHTML= (contador)
            
    
            let precioTotal = localStorage.getItem("precioTotal")
            precioTotal = parseInt(precioTotal) - parseInt(arrayID.precio)
    
            localStorage.setItem("precioTotal", precioTotal)
    
            $(".precio").html(`
                $ ${precioTotal}
            `);
    
        }
       
    })
}


    function prodEliminar(conta){
       
     let precio = document.querySelector(".precio")
     let precioTotal = localStorage.getItem("precioTotal");

     let total = precioTotal;
     
        precio.innerHTML =(`
            $ ${total}
        `);

        const tacho = $(".eliminar");


        for (let element of tacho){
     
            let myID = element.id;
            let producto = $(`#${myID}`);

            
            element.addEventListener("click",function(){
                conta = conta-1;

               let arrayContador = JSON.parse(localStorage.getItem("carrito"));
               
               let arrayID = arrayContador.find(e => e.id == element.id)


               let precitouu = parseInt(arrayID.precio) * parseInt(arrayID.cantidad)

               console.log(precitouu)
                
               
               let resut = precioTotal - precitouu
       

               $(".precio").html(`
                   $ ${resut}
               `);
       
               
   /*              $(".conejo").fadeIn().show()

                if ($(".conejo").show()){
                    $(".conejo").fadeIn().hide()
                }
 */


                $(".contador p").html(`
                    <p>${conta}</p>
                `);

            
                for (let elementProd of producto){
                    elementProd.remove();
                };

             
            
                if(conta == 0){
                    localStorage.removeItem("carrito");
                    localStorage.setItem("contador", conta-1 )

                    $(".carrito__vacio-container").show();
                    $(".carrito__productos").hide();
                };

            })
        }

    }

    
});
