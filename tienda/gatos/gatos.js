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

Productos.push(new Tienda(1004,"cama model 4","camitas",5,"G", 100));
Productos.push(new Tienda(1005,"cama model 5","camitas",5,"G", 100));
Productos.push(new Tienda(1006,"cama model 5","camitas",5,"G", 100));

/* Productos seccion Accesorios */

Productos.push(new Tienda(2004,"Accesorio 4","accesorios",5,"G", 100));
Productos.push(new Tienda(2005,"Accesorio 5","accesorios",5,"G", 100));
Productos.push(new Tienda(2006,"Accesorio 6","accesorios",5,"G", 100));


/* Productos seccion Alimentos */

Productos.push(new Tienda(3004,"Alimento 4","alimentos",5,"G", 100));
Productos.push(new Tienda(3005,"Alimento 5","alimentos",5,"G", 100));
Productos.push(new Tienda(3006,"Alimento 6","alimentos",5,"G", 100));


/* Productos seccion Juguetes */

Productos.push(new Tienda(4004,"Juguete 4","juguetes",5,"G", 100));
Productos.push(new Tienda(4005,"Juguete 5","juguetes",5,"G", 100));
Productos.push(new Tienda(4006,"Juguete 6","juguetes",5,"G", 100));


/* 
document.getElementById("lista").onclick = function(){
    document.getElementById("listpedidos").style.display="block"; */