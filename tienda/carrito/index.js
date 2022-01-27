import{arrayProducts} from "../js/carrito.js"

$(() => {

    
    console.log(arrayProducts)

    function actualizar(){
        let conta = localStorage.getItem("contador")
    
        $(".contador p").html(`
            <p>${conta}</p>
        `)


    }
    
    actualizar();

    

});
