
let carritoContador = document.querySelector(".contador")



function actualizar(){
    let nombreProd = localStorage.getItem("nombreProd")
    let precioProd = localStorage.getItem("precioProd")
    let imgProd = localStorage.getItem("imgProd")
    let conta = localStorage.getItem("contador")


    carritoContador.innerHTML=`
    <p>${conta}</p>

`;
}



actualizar();