
$(() => {


    function actualizar() {
        let precioTotal = 0 
        let arrayProductos = JSON.parse(localStorage.getItem("productosCarrito"));
        precioTotal = localStorage.getItem("precioTotal");
        let conta = localStorage.getItem("contador");


        if(arrayProductos != null){
            if (conta != null) {
                if (conta != 0) {
                    if(precioTotal >= 0){

                                        
                        $(".contador p").html(`
                                <p>${0}</p>
                            `);

                        $(".carrito__vacio-container").hide();
                        $(".carrito__productos").show();
                        for (let i = 0; i < arrayProductos.length; i++) {
                            
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
                            prodEliminar(conta,precioTotal);
                            localStorage.setItem(`productosPRECIO${arrayProductos[i].id}`, arrayProductos[i].precio);
                            sum(arrayProductos[i].id)
                        }  

                    }
                }
            }
        }
    }
    
    actualizar();


    function sum(id){
        
        let contador = 1;

        let suma = document.querySelector(`#sum${id} p`)
        let num = document.querySelector(`#num${id}`)
        let resta = document.querySelector(`#rest${id}`)

        num.innerHTML= (contador)

        suma.addEventListener("click", function(){
            contador = contador +1
            num.innerHTML= (contador)
        })

        num.innerHTML= (contador)


        resta.addEventListener("click", function(){

            if(contador > 0){
                contador = contador -1
                num.innerHTML= (contador)
            }   
        })
    }



   




    function prodEliminar(conta,precioTotal){
       
        $(".precio").html(`
            $ ${precioTotal}
        `)

        const tacho = $(".eliminar")

        let productos = document.querySelector(".vaciar")

        for (let element of tacho){
     
            let myID = element.id
            let producto = $(`#${myID}`)


            element.addEventListener("click",function(){
                conta = conta-1


                let precio = localStorage.getItem(`productosPRECIO${myID}`)

                precioTotal = precioTotal - precio
                
/* 
                $(".conejo").fadeIn().show()

                if ($(".conejo").show()){
                    $(".conejo").fadeIn().hide()
                }
 */

                $(".precio").html(`
                    $ ${precioTotal}
                `)


                $(".contador p").html(`
                    <p>${conta}</p>
                `)


                productos.addEventListener("click", function(){
                    console.log("anda")
                })


            
                for (let elementProd of producto){
                    elementProd.remove()
                }


                if(conta == 0){
                    localStorage.removeItem("productosCarrito")
                    $(".carrito__vacio-container").show()
                    $(".carrito__productos").hide()
                }

            })
        }

    }



    
});
