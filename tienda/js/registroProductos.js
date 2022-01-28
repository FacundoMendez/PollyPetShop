export {Tienda}


class Tienda{
    constructor(id,nombre, seccion, stock,img ,tipo, precio){
        this.id = id;
        this.nombre = nombre;
        this.seccion = seccion;
        this.stock = stock; 
        this.img = img;
        this.tipo= tipo; /* TIPO:  P (perro) - G (Gato) */
        this.precio = precio;
    }

}
