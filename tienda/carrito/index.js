
$(() => {


    function actualizar(){
        let conta = localStorage.getItem("contador")
        let arrayProductos = JSON.parse(localStorage.getItem("productosCarrito"))
        let precioTotal = localStorage.getItem("precioTotal")

        $(".contador p").html(`
            <p>${conta}</p>
        `)

     

        if (conta != null){
            if(conta != 0){
                $(".carrito__vacio-container").hide()
                $(".carrito__productos").show()
                for (let i = 0; i < arrayProductos.length; i++){
    
                    $(".carrito__productos").append(`         
                        <div class="prodCar" id=${arrayProductos[i].id}>
                            <div class="imgProd"><img src="${arrayProductos[i].img}" alt=""></div>
                            <div class="textP nombreProd"><p>${arrayProductos[i].nombre}:</p></div>
                            <div class="textP precioProd"><p>$${arrayProductos[i].precio}</p></div>
                            <button class="eliminar" id="${arrayProductos[i].id}"><i class="far fa-trash-alt"></i> </button>
                        </div>
                    `)

                }
                prodEliminar()

            }
        }
    }
    
    actualizar();

    

    function prodEliminar(){
        const tacho = $(".eliminar")

        for (let element of tacho){

            let myID = element.id
            
            let producto = $(`#${myID}`)

            element.addEventListener("click",function(){

                for (let elementProd of producto){

                    console.log(elementProd.id)
                    
                    elementProd.remove()



                }
               
            })
            
        }
    }

    
});
