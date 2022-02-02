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
                <button class="prod__agregar"  role="button" id="${filtroJuguetesGato[i].id}">Agregar al carrito</button> 
                <div class="stage" >
                    <div class="heart" id="cora${filtroJuguetesGato[i].id}"></div>
                </div>
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
                <button class="prod__agregar"  role="button" id="${filtroAccesoriosGato[i].id}">Agregar al carrito</button> 
                <div class="stage" >
                    <div class="heart" id="cora${filtroAccesoriosGato[i].id}"></div>
                </div>
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
                <button class="prod__agregar"  role="button" id="${filtroCuchasGato[i].id}">Agregar al carrito</button> 
                <div class="stage" >
                    <div class="heart" id="cora${filtroCuchasGato[i].id}"></div>
                </div>
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
                <button class="prod__agregar" role="button" id="${filtroAlimentosGato[i].id}" >Agregar al carrito</button> 
                <div class="stage" >
                    <div class="heart" id="cora${filtroAlimentosGato[i].id}"></div>
                </div>
            </div>
        `;

        carrito();
    }
}



