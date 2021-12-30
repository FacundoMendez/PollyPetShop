class Tienda{
    constructor(id,nombre, seccion, cantidad, tipo, precio){
        this.id = id;
        this.nombre = nombre;
        this.seccion = seccion;
        this.cantidad = cantidad; 
        this.tipo= tipo; /* TIPO:  P (perro) - G (Gato) */
        this.precio = precio;
    }
}


const Productos = [];

/* Productos Seccion Camitas */
Productos.push(new Tienda(1001,"cama model 1 Perro","camitas",5,"P", 100));
Productos.push(new Tienda(1002,"cama model 2 Perro","camitas",5,"P", 100));
Productos.push(new Tienda(1003,"cama model 3 Perro","camitas",5,"P", 100));

Productos.push(new Tienda(1004,"cama model 4 Gato","camitas",5,"G", 100));
Productos.push(new Tienda(1005,"cama model 5 Gato","camitas",5,"G", 100));
Productos.push(new Tienda(1006,"cama model 6 Gato","camitas",5,"G", 100));


/* Productos seccion Accesorios */
Productos.push(new Tienda(2001,"Accesorio 1 Perro","accesorios",5,"P", 100));
Productos.push(new Tienda(2002,"Accesorio 2 Perro","accesorios",5,"P", 100));
Productos.push(new Tienda(2003,"Accesorio 3 Perro","accesorios",5,"P", 100));

Productos.push(new Tienda(2004,"Accesorio 4 Gato","accesorios",5,"G", 100));
Productos.push(new Tienda(2005,"Accesorio 5 Gato","accesorios",5,"G", 100));
Productos.push(new Tienda(2006,"Accesorio 6 Gato","accesorios",5,"G", 100));


/* Productos seccion Alimentos */
Productos.push(new Tienda(3001,"Alimento 1 Perro","alimentos",5,"P", 100));
Productos.push(new Tienda(3002,"Alimento 2 Perro","alimentos",5,"P", 100));
Productos.push(new Tienda(3003,"Alimento 3 Perro","alimentos",5,"P", 100));

Productos.push(new Tienda(3004,"Alimento 4 Gato","alimentos",5,"G", 100));
Productos.push(new Tienda(3005,"Alimento 5 Gato","alimentos",5,"G", 100));
Productos.push(new Tienda(3006,"Alimento 6 Gato","alimentos",5,"G", 100));


/* Productos seccion Juguetes */
Productos.push(new Tienda(4001,"Juguete 1 Perro","juguetes",5,"P", 100));
Productos.push(new Tienda(4002,"Juguete 2 Perro","juguetes",5,"P", 100));
Productos.push(new Tienda(4003,"Juguete 3 Perro","juguetes",5,"P", 100));

Productos.push(new Tienda(4004,"Juguete 4 Gato ","juguetes",5,"G", 100));
Productos.push(new Tienda(4005,"Juguete 5 Gato ","juguetes",5,"G", 100));
Productos.push(new Tienda(4006,"Juguete 6 Gato","juguetes",5,"G", 100));

const prod = document.getElementById("prod"); 


/*Devuelve todos los productos del market  */
function crearDivsTodo(){

    for (let i = 0; i < Productos.length; i++) {
        prod.innerHTML += `    
            <a href="#"><div class="prod__marco">
                <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
                <div class="prod__title"><p> ${Productos[i].nombre}</p> </div>
                <div class="prod__precio"><p>$${Productos[i].precio}</p></div>
                <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
            </div></a> 
        `;
    }
}

crearDivsTodo() 

function crearDivsPerros(){
    let filtroPerro = Productos.filter(elem => elem.tipo ==="P")

    for (let i = 0; i < filtroPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}
/* 
crearDivsPerros()
 */

function crearDivsGatos(){
    let filtroPerro = Productos.filter(elem => elem.tipo ==="G")

    for (let i = 0; i < filtroPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/* crearDivsGatos()  */



function crearDivsCamitas(){
    let filtroPerro = Productos.filter(elem => elem.seccion ==="camitas")

    for (let i = 0; i < filtroPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}
/* 
 crearDivsCamitas()   */


 function crearDivsJuguetes(){
    let filtroPerro = Productos.filter(elem => elem.seccion ==="juguetes")

    for (let i = 0; i < filtroPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/*  crearDivsJuguetes()    */

 function crearDivsAlimentos(){
    let filtroPerro = Productos.filter(elem => elem.seccion ==="alimentos")

    for (let i = 0; i < filtroPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}
/*  crearDivsAlimentos()    */


 function crearDivsAccesorios(){
    let filtroAccesorios = Productos.filter(elem => elem.seccion ==="accesorios")

    for (let i = 0; i < filtroAccesorios.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroAccesorios[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroAccesorios[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/*  crearDivsAccesorios()    */






/* ----------------Filtros compartidos---------------- */



function crearDivsAccesoriosPerro(){
    let filtroAccesoriosPerro = Productos.filter(elem => elem.seccion ==="accesorios" && elem.tipo === "P")

    for (let i = 0; i < filtroAccesoriosPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroAccesoriosPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroAccesoriosPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/* 
 crearDivsAccesoriosPerro()  
 */


 
function crearDivsAccesoriosGato(){
    let filtroAccesoriosGato = Productos.filter(elem => elem.seccion ==="accesorios" && elem.tipo === "G")

    for (let i = 0; i < filtroAccesoriosGato.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroAccesoriosGato[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroAccesoriosGato[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/* 
 crearDivsAccesoriosGato()  
 */

 function crearDivsCamitasGato(){
    let filtroCamitasGato = Productos.filter(elem => elem.seccion ==="camitas" && elem.tipo === "G")

    for (let i = 0; i < filtroCamitasGato.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroCamitasGato[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroCamitasGato[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/* crearDivsCamitasGato()   */



 function crearDivsCamitasPerro(){
    let filtroCamitasPerro = Productos.filter(elem => elem.seccion ==="camitas" && elem.tipo === "P")

    for (let i = 0; i < filtroCamitasPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroCamitasPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroCamitasPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/*  crearDivsCamitasPerro()   */


function crearDivsJuguetesPerro(){
    let filtroJuguetesPerro = Productos.filter(elem => elem.seccion ==="juguetes" && elem.tipo === "P")

    for (let i = 0; i < filtroJuguetesPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroJuguetesPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroJuguetesPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/*  crearDivsJuguetesPerro()   */

function crearDivsJuguetesGato(){
    let filtroJuguetesGato = Productos.filter(elem => elem.seccion ==="juguetes" && elem.tipo === "G")

    for (let i = 0; i < filtroJuguetesGato.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroJuguetesGato[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroJuguetesGato[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/*  crearDivsJuguetesGato()   */



function crearDivsAlimentosGato(){
    let filtroAlimentosGato = Productos.filter(elem => elem.seccion ==="alimentos" && elem.tipo === "G")

    for (let i = 0; i < filtroAlimentosGato.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroAlimentosGato[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroAlimentosGato[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/*  crearDivsAlimentosGato()  
 */


function crearDivsAlimentosPerro(){
    let filtroAlimentosPerro = Productos.filter(elem => elem.seccion ==="alimentos" && elem.tipo === "P")

    for (let i = 0; i < filtroAlimentosPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="../src/img/ali1.jpg" alt=""></div>
            <div class="prod__title"><p> ${filtroAlimentosPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroAlimentosPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/* crearDivsAlimentosPerro()   */


let Ali=document.getElementById("Alimentos");

/* Ali.addEventListener("click", function(){
    if (Ali.checked){
        crearDivsCamitas();
        alert("si")
    }
    
}) */

