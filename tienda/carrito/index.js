
$(() => {


    function actualizar(){
        let conta = localStorage.getItem("contador")
        let arrayProductos = JSON.parse(localStorage.getItem("productosCarrito"))
        let precioTotal = localStorage.getItem("precioTotal")

        $(".contador p").html(`
            <p>${conta}</p>
        `)


        if($(".contador p")!= 0){
            $(".carrito__vacio-container").hide()
            $(".carrito__productos").show()
            $(".container").css("margin-top", "20rem");
            $(".container__resumen").css("margin-top", "0rem");
            for (let i = 0; i < arrayProductos.length; i++){

                $(".carrito__productos").append(`         
                <div class="prodCar">
                    <div class="imgProd"><img src="${arrayProductos[i].img}" alt=""></div>
                    <div class="textP nombreProd"><p>${arrayProductos[i].nombre}:</p></div>
                    <div class="textP precioProd"><p>$${arrayProductos[i].precio}</p></div>
                </div>
                `)

            }
        }

    


    }
    
    actualizar();

    

});
