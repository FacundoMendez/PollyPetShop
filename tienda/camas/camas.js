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
Productos.push(new Tienda(1001,"cama model 1","camitas",5,"P", 100));
Productos.push(new Tienda(1002,"cama model 2","camitas",5,"P", 100));
Productos.push(new Tienda(1003,"cama model 3","camitas",5,"P", 100));
Productos.push(new Tienda(1004,"cama model 4","camitas",5,"G", 100));
Productos.push(new Tienda(1005,"cama model 5","camitas",5,"G", 100));
Productos.push(new Tienda(1006,"cama model 5","camitas",5,"G", 100));
