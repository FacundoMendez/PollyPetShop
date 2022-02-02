export {
    crearDivsAccesoriosPerro,
    crearDivsAlimentosPerro,
    crearDivsCuchasPerro,
    crearDivsJuguetesPerro,
    crearDivsPerros
}



import{carrito} from "../carrito.js"


import{Productos} from "../arrayProductos.js"


const prod = document.getElementById("prod"); 



/* -------------------PERROS---------------------- */


function crearDivsPerros(){
    crearDivsAlimentosPerro();
    crearDivsCuchasPerro();
    crearDivsAccesoriosPerro();
    crearDivsJuguetesPerro();
}


function crearDivsAccesoriosPerro(){
    let filtroAccesoriosPerro = Productos.filter(elem => elem.seccion ==="accesorios" && elem.tipo === "P")

    for (let i = 0; i < filtroAccesoriosPerro.length; i++){
        
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroAccesoriosPerro[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroAccesoriosPerro[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroAccesoriosPerro[i].precio}</p></div>
                <button class="prod__agregar"  role="button" id="${filtroAccesoriosPerro[i].id}">Agregar al carrito</button>
                <div class="stage" >
                    <div class="heart"  id="cora${filtroAccesoriosPerro[i].id}"></div>
                </div>
            </div>
        `;

    carrito();

    }
}


function crearDivsJuguetesPerro(){
    let filtroJuguetesPerro = Productos.filter(elem => elem.seccion ==="juguetes" && elem.tipo === "P")

    for (let i = 0; i < filtroJuguetesPerro.length; i++){
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroJuguetesPerro[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroJuguetesPerro[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroJuguetesPerro[i].precio}</p></div>
                <button class="prod__agregar"  role="button" id="${filtroJuguetesPerro[i].id}">Agregar al carrito</button> 
                <div class="stage">
                    <div class="heart"  id="cora${filtroJuguetesPerro[i].id}"></div>
                </div>
            </div>
        `;

        carrito();
    }
}


function crearDivsCuchasPerro(){
    let filtroCuchasPerro = Productos.filter(elem => elem.seccion ==="cuchas" && elem.tipo === "P")

    for (let i = 0; i < filtroCuchasPerro.length; i++){
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroCuchasPerro[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroCuchasPerro[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroCuchasPerro[i].precio}</p></div>
                <button class="prod__agregar"  role="button" id="${filtroCuchasPerro[i].id}">Agregar al carrito</button> 
                <div class="stage" >
                    <div class="heart" id="cora${filtroCuchasPerro[i].id}" ></div>
                </div>
            </div>
        `;
        carrito();
    }
}


function crearDivsAlimentosPerro(){
    let filtroAlimentosPerro = Productos.filter(elem => elem.seccion ==="alimentos" && elem.tipo === "P")

    for (let i = 0; i < filtroAlimentosPerro.length; i++){
        prod.innerHTML += `    
            <div class="prod__marco">
                <div class="prod__img"><img src="${filtroAlimentosPerro[i].img}" alt=""></div>
                <div class="prod__title"><p> ${filtroAlimentosPerro[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${filtroAlimentosPerro[i].precio}</p></div>
                <button class="prod__agregar"  role="button" id="${filtroAlimentosPerro[i].id}">Agregar al carrito</button> 
                <div class="stage" >
                    <div class="heart" id="cora${filtroAlimentosPerro[i].id}" ></div>
                </div>
            </div>
        `;
        carrito();
    }
}

