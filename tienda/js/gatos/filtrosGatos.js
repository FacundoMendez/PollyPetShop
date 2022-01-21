export{
    crearDivsAccesoriosGato,
    crearDivsCuchasGato,
    crearDivsAlimentosGato,
    crearDivsJuguetesGato,
    crearDivsGatos
}


import{carrito} from "../carrito.js"

import{Productos} from "../arrayProductos.js"


const prod = document.getElementById("prod"); 




/* -------------------GATOS---------------------- */

function crearDivsGatos(){
    crearDivsAlimentosGato();
    crearDivsCuchasGato();
    crearDivsAccesoriosGato();
    crearDivsJuguetesGato();
}





function crearDivsJuguetesGato(){
    let filtroJuguetesGato = Productos.filter(elem => elem.seccion ==="juguetes" && elem.tipo === "G")

    for (let i = 0; i < filtroJuguetesGato.length; i++){
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroJuguetesGato[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroJuguetesGato[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroJuguetesGato[i].precio}</p></div>
                <div class="prod__agregar" id="${filtroJuguetesGato[i].id}"><p>Agregar al Carrito</p></div> 
            </div>
        `;

        carrito();
    }

}




function crearDivsAccesoriosGato(){
    let filtroAccesoriosGato = Productos.filter(elem => elem.seccion ==="accesorios" && elem.tipo === "G")

    for (let i = 0; i < filtroAccesoriosGato.length; i++){
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroAccesoriosGato[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroAccesoriosGato[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroAccesoriosGato[i].precio}</p></div>
                <div class="prod__agregar" id="${filtroAccesoriosGato[i].id}"><p>Agregar al Carrito</p></div> 
            </div>
        `;
        carrito();

    }

}



function crearDivsCuchasGato(){
    let filtroCuchasGato = Productos.filter(elem => elem.seccion ==="cuchas" && elem.tipo === "G")

    for (let i = 0; i < filtroCuchasGato.length; i++){
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroCuchasGato[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroCuchasGato[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroCuchasGato[i].precio}</p></div>
                <div class="prod__agregar" id="${filtroCuchasGato[i].id}"><p>Agregar al Carrito</p></div> 
            </div>
        `;

        carrito();
    }
}




function crearDivsAlimentosGato(){
    let filtroAlimentosGato = Productos.filter(elem => elem.seccion ==="alimentos" && elem.tipo === "G")

    for (let i = 0; i < filtroAlimentosGato.length; i++){
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroAlimentosGato[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroAlimentosGato[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroAlimentosGato[i].precio}</p></div>
                <div class="prod__agregar" id="${filtroAlimentosGato[i].id}"><p>Agregar al Carrito</p></div> 
            </div>
        `;

        carrito();
    }
}


