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


/* Productos seccion Alimentos */
Productos.push(new Tienda(3001,"Alimento 1","alimentos",5,"P", 100));
Productos.push(new Tienda(3002,"Alimento 2","alimentos",5,"P", 100));
Productos.push(new Tienda(3003,"Alimento 3","alimentos",5,"P", 100));
Productos.push(new Tienda(3004,"Alimento 4","alimentos",5,"G", 100));
Productos.push(new Tienda(3005,"Alimento 5","alimentos",5,"G", 100));
Productos.push(new Tienda(3006,"Alimento 6","alimentos",5,"G", 100));


