import{arrayProducts} from "../js/carrito.js"

$(() => {

    
    console.log(arrayProducts)

    function actualizar(){
        let conta = localStorage.getItem("contador")
    
        $(".contador p").html(`
            <p>${conta}</p>
        `)

    /*   for(let i = 0 ; i < arrayProducts.lenght; i++){


        } */

    }
    
    actualizar();

    

});
