
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
                            sum(arrayProductos[i].id,arrayProductos[i].precio,precioTotal)
                            rest(arrayProductos[i].id,arrayProductos[i].precio,precioTotal)
                        }  

                    }
                }
            }
        }
    }
    
    actualizar();


    function sum(id,precioProducto, precioTotal){
        
        let contador = 1;

        let suma = document.querySelector(`#sum${id} p`)
        let num = document.querySelector(`#num${id}`)
        let precio = document.querySelector(".precio")
        let total= precioTotal

        num.innerHTML= (contador)
        console.log(suma)

        for (let element of suma){
            suma.addEventListener("click", function(){
                contador = contador +1
                num.innerHTML= (contador)
                
                total= precioProducto + total ;

                    precio.innerHTML=(`
                        $ ${total}
                    `)
                
            })
        }

    }



    function rest(id,precioProducto, precioTotal){
        
        let contador = 1;

        let resta = document.querySelector(`#rest${id}`)
        let num = document.querySelector(`#num${id}`)
        let precio = document.querySelector(".precio")
        let total= precioTotal

        num.innerHTML= (contador)


        resta.addEventListener("click", function(){

            if(contador > 0){
                contador = contador -1
                num.innerHTML= (contador)
                
                total = total - precioProducto

                precio.innerHTML=(`
                 $ ${total}
                `)

            }   
        })

    }




    function prodEliminar(conta,precioTotal){
       
        $(".precio").html(`
            $ ${precioTotal}
        `)

        const tacho = $(".eliminar")

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
