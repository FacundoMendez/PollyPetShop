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


/* Productos seccion Acces2rios */
Productos.push(new Tienda(2001,"Accesorio 1","accesorios",5,"P", 100));
Productos.push(new Tienda(2002,"Accesorio 2","accesorios",5,"P", 100));
Productos.push(new Tienda(2003,"Accesorio 3","accesorios",5,"P", 100));


/* Productos seccion Alimentos */
Productos.push(new Tienda(3001,"Alimento 1","alimentos",5,"P", 100));
Productos.push(new Tienda(3002,"Alimento 2","alimentos",5,"P", 100));
Productos.push(new Tienda(3003,"Alimento 3","alimentos",5,"P", 100));


/* Productos seccion Juguetes */
Productos.push(new Tienda(4001,"Juguete 1","juguetes",5,"P", 100));
Productos.push(new Tienda(4002,"Juguete 2","juguetes",5,"P", 100));
Productos.push(new Tienda(4003,"Juguete 3","juguetes",5,"P", 100));


