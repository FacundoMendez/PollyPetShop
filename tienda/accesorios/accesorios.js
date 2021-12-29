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


/* Productos seccion Accesorios */
Productos.push(new Tienda(2001,"Accesorio 1","accesorios",5,"P", 100));
Productos.push(new Tienda(2002,"Accesorio 2","accesorios",5,"P", 100));
Productos.push(new Tienda(2003,"Accesorio 3","accesorios",5,"P", 100));
Productos.push(new Tienda(2004,"Accesorio 4","accesorios",5,"G", 100));
Productos.push(new Tienda(2005,"Accesorio 5","accesorios",5,"G", 100));
Productos.push(new Tienda(2006,"Accesorio 6","accesorios",5,"G", 100));
