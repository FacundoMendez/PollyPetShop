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


/* Productos seccion Juguetes */
Productos.push(new Tienda(4001,"Juguete 1","juguetes",5,"P", 100));
Productos.push(new Tienda(4002,"Juguete 2","juguetes",5,"P", 100));
Productos.push(new Tienda(4003,"Juguete 3","juguetes",5,"P", 100));
Productos.push(new Tienda(4004,"Juguete 4","juguetes",5,"G", 100));
Productos.push(new Tienda(4005,"Juguete 5","juguetes",5,"G", 100));
Productos.push(new Tienda(4006,"Juguete 6","juguetes",5,"G", 100));

