
$(() => {


    function actualizar() {
        let precioTotal = 0 
        let arrayProductos = JSON.parse(localStorage.getItem("productosCarrito"));
        precioTotal = localStorage.getItem("precioTotal");
        let conta = localStorage.getItem("contador");

        if(arrayProductos != null){
            if (conta != null) {

                if (conta != 0) {

                $(".contador p").html(`
                        <p>${conta}</p>
                    `);

                $(".carrito__vacio-container").hide();
                $(".carrito__productos").show();

                for (let i = 0; i < arrayProductos.length; i++) {

                    $(".carrito__productos").append(`         
                        <div class="prodCar" id=${arrayProductos[i].id}>
                            <div class="imgProd"><img src="${arrayProductos[i].img}" alt=""></div>
                            <div class="textP nombreProd"><p>${arrayProductos[i].nombre}:</p></div>
                            <div class="textP precioProd"id="P${arrayProductos[i].id}"><p>$${arrayProductos[i].precio}</p></div>
                            <button class="eliminar" id=${arrayProductos[i].id}><i class="far fa-trash-alt"></i> </button>
                        </div>
                        
                    `);
                }
                prodEliminar(conta,precioTotal);

                }
            }
        }
    }
    
    actualizar();
    

    function prodEliminar(conta,precioTotal){
       
        $(".precio").html(`
            $ ${precioTotal}
        `)

        const tacho = $(".eliminar")
        for (let element of tacho){
     
            let myID = element.id
            let producto = $(`#${myID}`)

            let precio = $(`.precioProd #P${myID} `)

            element.addEventListener("click",function(){
                conta = conta-1



                   
                $(".precio").html(`
                    $ ${precioTotal}
                `)
                console.log(precioTotal)


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
