class Tienda{
    constructor(id,nombre, seccion, cantidad,img ,tipo, precio){
        this.id = id;
        this.nombre = nombre;
        this.seccion = seccion;
        this.cantidad = cantidad; 
        this.img = img;
        this.tipo= tipo; /* TIPO:  P (perro) - G (Gato) */
        this.precio = precio;
    }
}


const Productos = [];

/* Productos Seccion Camitas */
Productos.push(new Tienda(1000,"Colchoneta firulas guata 90 x 1.50 ","cuchas",5,"../cuchas/src/img/perro/cam1000-P.jpg" ,"P", 1339));
Productos.push(new Tienda(1001,"Colchoneta firulas guata 80 x 80 ","cuchas",5,"../cuchas/src/img/perro/cam1001-P.jpg" ,"P", 1160));
Productos.push(new Tienda(1002,"Cama monaco Anti Desgarro M (50 x 60cm) ","cuchas",5,"../cuchas/src/img/perro/cam1002-P.jpg" ,"P", 1016));
Productos.push(new Tienda(1003,"Colchoneta firulas guata 60 x 60","cuchas",5,"../cuchas/src/img/perro/cam1003-P.jpg" ,"P", 752));
Productos.push(new Tienda(1004,"Colchoneta firulas guata 40 x 40","cuchas",5,"../cuchas/src/img/perro/cam1004-P.jpg" ,"P", 9249));
Productos.push(new Tienda(1005,"Cucha termica rotomoldeada grande","cuchas",5,"../cuchas/src/img/perro/cam1005-P.jpg" ,"P", 6956));
Productos.push(new Tienda(1006,"Cucha termica rotomodeada mediana","cuchas",5,"../cuchas/src/img/perro/cam1006-P.jpg" ,"P", 7020));
Productos.push(new Tienda(1007,"Cucha casa plastica Iglu n°3","cuchas",5,"../cuchas/src/img/perro/cam1007-P.jpg" ,"P", 6113));
Productos.push(new Tienda(1008,"Cucha Iglu kennel small 80x51x51","cuchas",5,"../cuchas/src/img/perro/cam1008-P.jpg" ,"P", 9883));
Productos.push(new Tienda(1009,"Cucha fibra orione Mediana 80x70x68","cuchas",5,"../cuchas/src/img/perro/cam1009-P.jpg" ,"P", 2427));
Productos.push(new Tienda(1010,"Cucha casa plastica Iglu n°1 ","cuchas",5,"../cuchas/src/img/perro/cam1010-P.jpg" ,"P", 3999));
Productos.push(new Tienda(1011,"Cucha casa plastica Iglu n°2 ","cuchas",5,"../cuchas/src/img/perro/cam1011-P.jpg" ,"P", 8702));
Productos.push(new Tienda(1012,"Cucha Iglu kennel Medium 92x58x58","cuchas",5,"../cuchas/src/img/perro/cam1012-P.jpg" ,"P", 10400));
Productos.push(new Tienda(1013,"Cucha fibra orione Mediana 90x80x74","cuchas",5,"../cuchas/src/img/perro/cam1013-P.jpg" ,"P", 11566));
Productos.push(new Tienda(1014,"Cucha fibra orione Gigante 120x104x90","cuchas",5,"../cuchas/src/img/perro/cam1014-P.jpg" ,"P", 13248));

Productos.push(new Tienda(1000,"Cucha para gato con techo","cuchas",5,"../cuchas/src/img/gato/cam1000-G.jpg" ,"G", 2719));
Productos.push(new Tienda(1001,"Cucha para gato n°1","cuchas",5,"../cuchas/src/img/gato/cam1001-G.jpg" ,"G", 3209));
Productos.push(new Tienda(1002,"Cucha para gato n°2","cuchas",5,"../cuchas/src/img/gato/cam1002-G.jpg" ,"G", 2516));
Productos.push(new Tienda(1003,"Cucha para gato n°3","cuchas",5,"../cuchas/src/img/gato/cam1003-G.jpg" ,"G", 4705));
Productos.push(new Tienda(1004,"Cucha para gato n°4","cuchas",5,"../cuchas/src/img/gato/cam1004-G.jpg" ,"G", 3413));

/* Productos seccion Accesorios */
Productos.push(new Tienda(2000,"Correa Y Collar P/perro Pets Class Conjunto Ec","accesorios",5,"../accesorios/src/img/perro/acc2000-P.jpg" ,"P", 415));
Productos.push(new Tienda(2001,"Palitos Para Perros Pet's Fun 10 U","accesorios",5,"../accesorios/src/img/perro/acc2001-P.jpg" ,"P", 104));
Productos.push(new Tienda(2002,"Hueso Para Perro Vaquero Large","accesorios",5,"../accesorios/src/img/perro/acc2002-P.jpg" ,"P", 400));
Productos.push(new Tienda(2003,"Acondicionador P/perro Pets Class X500cm3","accesorios",5,"../accesorios/src/img/perro/acc2003-P.jpg" ,"P", 511));
Productos.push(new Tienda(2004,"Comedero comelento Waffle (1500ML)","accesorios",5,"../accesorios/src/img/perro/acc2004-P.jpg" ,"P", 2600));
Productos.push(new Tienda(2005,"Snacks P/perro Pets Class Palitos Fort. 3/8 X1","accesorios",5,"../accesorios/src/img/perro/acc2005-P.jpg" ,"P", 205));
Productos.push(new Tienda(2006,"Snacks Para Perros Huesitos Pet S Fun 250 Gr","accesorios",5,"../accesorios/src/img/perro/acc2006-P.jpg" ,"P", 289));
Productos.push(new Tienda(2007,"Snacks P/perro Pets Class Dona De Cuero X1u","accesorios",5,"../accesorios/src/img/perro/acc2007-P.jpg" ,"P", 195));
Productos.push(new Tienda(2008,"Shampoo P/perro Pets Class Frutilla X500cm3","accesorios",5,"../accesorios/src/img/perro/acc2008-P.jpg" ,"P", 588));
Productos.push(new Tienda(2009,"Snacks P/perro Pets Class Hueso 5/6 X1u","accesorios",5,"../accesorios/src/img/perro/acc2009-P.jpg" ,"P", 399));
Productos.push(new Tienda(2010,"Snack Para Perros Rellenos Pet S Fun 250 Gr","accesorios",5,"../accesorios/src/img/perro/acc2010-P.jpg" ,"P", 289));
Productos.push(new Tienda(2011,"Shampoo P/perro Pets Class Pulguicida/garrap.","accesorios",5,"../accesorios/src/img/perro/acc2011-P.jpg" ,"P", 621));
Productos.push(new Tienda(2012,"Huesos Para Perro Vaquero Medium 150 Gr","accesorios",5,"../accesorios/src/img/perro/acc2012-P.jpg" ,"P", 215));


Productos.push(new Tienda(2000,"Piedra Sanit Gato Absorsol 3,6k","accesorios",5,"../accesorios/src/img/gato/acc2000-G.jpg" ,"G", 448));
Productos.push(new Tienda(2001,"Palita Sanitaria Con Ratrillo","accesorios",5,"../accesorios/src/img/gato/acc2001-G.jpg" ,"G", 104));
Productos.push(new Tienda(2002,"Piedras Sanitarias Tidy Cats Purina","accesorios",5,"../accesorios/src/img/gato/acc2002-G.jpg" ,"G", 265));
Productos.push(new Tienda(2003,"Rascals correa y arnes","accesorios",5,"../accesorios/src/img/gato/acc2003-G.jpg" ,"G", 888.00));
Productos.push(new Tienda(2005,"Collar rascals para gato","accesorios",5,"../accesorios/src/img/gato/acc2005-G.jpg" ,"G", 416));
Productos.push(new Tienda(2006,"Comedor plastico forma gato","accesorios",5,"../accesorios/src/img/gato/acc2006-G.jpg" ,"G", 156));
Productos.push(new Tienda(2007,"Fuente bebedero gato 2lt","accesorios",5,"../accesorios/src/img/gato/acc2007-G.jpg" ,"G", 5808));
Productos.push(new Tienda(2008,"Comedor forma de gato con soporte de pie","accesorios",5,"../accesorios/src/img/gato/acc2008-G.jpg" ,"G", 1039));
Productos.push(new Tienda(2009,"Tunel para gatos con colchoneta","accesorios",5,"../accesorios/src/img/gato/acc2009-G.jpg" ,"G", 7390));
Productos.push(new Tienda(2010,"Tunel triple para gato zootec","accesorios",5,"../accesorios/src/img/gato/acc2010-G.jpg" ,"G", 3442));
Productos.push(new Tienda(2011,"Comedero interactivo Digger Catit","accesorios",5,"../accesorios/src/img/gato/acc2011-G.jpg" ,"G", 1806));
Productos.push(new Tienda(2012,"Centro de masaje para gato","accesorios",5,"../accesorios/src/img/gato/acc2012-G.jpg" ,"G", 5562));
Productos.push(new Tienda(2013,"Alicate cortauñas tijera gato","accesorios",5,"../accesorios/src/img/gato/acc2013-G.jpg" ,"G", 510));
Productos.push(new Tienda(2014,"Collar pulguicida tea gato","accesorios",5,"../accesorios/src/img/gato/acc2014-G.jpg" ,"G", 866));
Productos.push(new Tienda(2015,"Promo x10 piedritas sanicat x 4kg","accesorios",5,"../accesorios/src/img/gato/acc2015-G.jpg" ,"G", 2145));
Productos.push(new Tienda(2016,"Promo x5 priedrias sanicat x 4kg","accesorios",5,"../accesorios/src/img/gato/acc2016-G.jpg" ,"G", 1110));
Productos.push(new Tienda(2017,"Litera con borde grande (42x52x17)","accesorios",5,"../accesorios/src/img/gato/acc2017-G.jpg" ,"G", 2250));
Productos.push(new Tienda(2018,"Bebedero automatico durapets","accesorios",5,"../accesorios/src/img/gato/acc2018-G.jpg" ,"G", 4271));
Productos.push(new Tienda(2019,"Firesur piedritas sanitarias x15kg","accesorios",5,"../accesorios/src/img/gato/acc2019-G.jpg" ,"G", 650));
Productos.push(new Tienda(2020,"Promo x5 firesur Piedritas x15kg","accesorios",5,"../accesorios/src/img/gato/acc2020-G.jpg" ,"G", 3021));


/* Productos seccion Alimentos */
Productos.push(new Tienda(3000,"Alimento Para Perros Pedigree Carne Pouch Adulto 100 Gr","alimentos",5,"../alimentos/src/img/perro/ali3000.jpg" ,"P", 97));
Productos.push(new Tienda(3001,"Alimento Para Perros Pedigree Carne 340 Gr","alimentos",5,"../alimentos/src/img/perro/ali3001.jpg" ,"P", 303));
Productos.push(new Tienda(3002,"Alimento Para Perros Pedigree Carne 100 Gr","alimentos",5,"../alimentos/src/img/perro/ali3002.jpg" ,"P", 96));
Productos.push(new Tienda(3003,"Alimento Para Perros Sabrositos 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3003.jpg" ,"P", 583));
Productos.push(new Tienda(3004,"Alimento Para Perros Pedigree Adulto Razas Pequeñas 1,5 Kg","alimentos",5,"../alimentos/src/img/perro/ali3004.jpg" ,"P", 544));
Productos.push(new Tienda(3005,"Alimento Para Perros Pedigree Adulto Razas Pequeñas 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3005.jpg" ,"P", 1094));
Productos.push(new Tienda(3006,"Alimento Para Perros Pedigree Pollo 340 Kg","alimentos",5,"../alimentos/src/img/perro/ali3006.jpg" ,"P", 303));
Productos.push(new Tienda(3007,"Alimento Para Perros Sabrositos Adultos 15 Kg","alimentos",5,"../alimentos/src/img/perro/ali3007.jpg" ,"P", 2517));
Productos.push(new Tienda(3008,"Alimento Para Perros Pedigree Pollo 100 Gr","alimentos",5,"../alimentos/src/img/perro/ali3008.jpg" ,"P", 100));
Productos.push(new Tienda(3009,"Alimento Para Perros Pedigree Cachorro 340 Gr","alimentos",5,"../alimentos/src/img/perro/ali3009.jpg" ,"P", 303));
Productos.push(new Tienda(3010,"Alimento Para Perros Pedigree Adulto 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3010.jpg" ,"P", 995));
Productos.push(new Tienda(3011,"Alimento Para Perros Pedigree Cachorros 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3011.jpg" ,"P", 1045));
Productos.push(new Tienda(3012,"Alimento Para Perros Pedigree Adulto Mayor 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3012.jpg" ,"P", 875));
Productos.push(new Tienda(3013,"Alimento Para Perros Pedigree Adulto Carne Pollo Y Cereales 1,5 Kg","alimentos",5,"../alimentos/src/img/perro/ali3013.jpg" ,"P", 511));
Productos.push(new Tienda(3014,"Alimento Para Perros Pedigree Balance Natural 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3014.jpg" ,"P", 1094));
Productos.push(new Tienda(3015,"Alimento Para Perros Sabrositos 1,5 Kg","alimentos",5,"../alimentos/src/img/perro/ali3015.jpg" ,"P", 219));
Productos.push(new Tienda(3016,"Alimento Para Perros Pedigree Adulto Carne, Pollo Y Cereales 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3016.jpg" ,"P", 995));
Productos.push(new Tienda(3017,"Alimento Para Perros Sabrositos Variedad 3 Kg","alimentos",5,"../alimentos/src/img/perro/ali3017.jpg" ,"P", 566));
Productos.push(new Tienda(3018,"Alimento Para Perros Petclass Pouch Carne 100 Gr","alimentos",5,"../alimentos/src/img/perro/ali3018.jpg" ,"P", 94));
Productos.push(new Tienda(3019,"Alimento Para Perros Pedigree Cachorros 85 Gr","alimentos",5,"../alimentos/src/img/perro/ali3019.jpg" ,"P", 96));
Productos.push(new Tienda(3020,"Alimento Para Perros Petclass Pouch Pollo 85 Gr","alimentos",5,"../alimentos/src/img/perro/ali3020.jpg" ,"P", 540));


Productos.push(new Tienda(3000,"Alimento Whiskas Para Gatos Carne 3kg","alimentos",5,"../alimentos/src/img/gato/ali3000-G.jpg" ,"G", 1347));
Productos.push(new Tienda(3001,"Alimento Whiskas Para Gatos Carne 500gr","alimentos",5,"../alimentos/src/img/gato/ali3001-G.jpg" ,"G", 268));
Productos.push(new Tienda(3002,"Alimento Whiskas Para Gatos Pescado 6kg","alimentos",5,"../alimentos/src/img/gato/ali3002-G.jpg" ,"G", 2414));
Productos.push(new Tienda(3003,"Alimento Whiskas Para Gatos Hogareños 3kg","alimentos",5,"../alimentos/src/img/gato/ali3003-G.jpg" ,"G", 1406));
Productos.push(new Tienda(3004,"Alimento Sabrositos Gato Mix P,c,v 1k","alimentos",5,"../alimentos/src/img/gato/ali3004-G.jpg" ,"G", 301));
Productos.push(new Tienda(3005,"Alimento Whiskas Gatos Ad Soufle Pescado X85g","alimentos",5,"../alimentos/src/img/gato/ali3005-G.jpg" ,"G", 97));
Productos.push(new Tienda(3006,"Alimento Whiskas Para Gatos Pollo 500gr","alimentos",5,"../alimentos/src/img/gato/ali3006-G.jpg" ,"G", 280));
Productos.push(new Tienda(3007,"Alimento Whiskas Para Gatos Hogareños 1kg","alimentos",5,"../alimentos/src/img/gato/ali3007-G.jpg" ,"G", 511));
Productos.push(new Tienda(3008,"Alimento King Food Para Gato X 500gr","alimentos",5,"../alimentos/src/img/gato/ali3008-G.jpg" ,"G", 136));
Productos.push(new Tienda(3009,"Alimento Whiskas Para Gatos Carne 6kg","alimentos",5,"../alimentos/src/img/gato/ali3009-G.jpg" ,"G", 2414));
Productos.push(new Tienda(3010,"Alimento King Food Para Gatos X 1kg","alimentos",5,"../alimentos/src/img/gato/ali3010-G.jpg" ,"G", 239));
Productos.push(new Tienda(3011,"Alimento Whiskas Para Gatos Pollo 1kg","alimentos",5,"../alimentos/src/img/gato/ali3011-G.jpg" ,"G", 509));
Productos.push(new Tienda(3012,"Alimento Whiskas Para Gatos Hogareños 500gr","alimentos",5,"../alimentos/src/img/gato/ali3012-G.jpg" ,"G", 289));
Productos.push(new Tienda(3013,"Alimento Para Gatos Sabrositos Mix 1 Kg","alimentos",5,"../alimentos/src/img/gato/ali3013-G.jpg" ,"G", 114));
Productos.push(new Tienda(3014,"Alimento Para Gatos Purina Cat Chow Adulto 3 Kg","alimentos",5,"../alimentos/src/img/gato/ali3014-G.jpg" ,"G", 868));
Productos.push(new Tienda(3015,"Alimento Para Gatos Sabrositos Pescado 500 Gr","alimentos",5,"../alimentos/src/img/gato/ali3015-G.jpg" ,"G", 64));

/* Productos seccion Juguetes */
Productos.push(new Tienda(4000,"Juguete patalin dental grande ","juguetes",5,"../juguetes/src/img/perro/ju4000-P.jpg" ,"P", 1360));
Productos.push(new Tienda(4001,"Juguete Sopapa con pelota Dispensadora","juguetes",5,"../juguetes/src/img/perro/ju4001-P.jpg" ,"P", 1860));
Productos.push(new Tienda(4002,"Juguete torpedo limpia dientes Grande","juguetes",5,"../juguetes/src/img/perro/ju4002-P.jpg" ,"P", 1700));
Productos.push(new Tienda(4003,"Juguete stick mordillo con soga","juguetes",5,"../juguetes/src/img/perro/ju4003-P.jpg" ,"P", 1310));
Productos.push(new Tienda(4004,"Juguete sopapa con torpedo dispensador","juguetes",5,"../juguetes/src/img/perro/ju4004-P.jpg" ,"P", 2480));
Productos.push(new Tienda(4005,"Juguete hueso flexible furacao Espacial n°3","juguetes",5,"../juguetes/src/img/perro/ju4005-P.jpg" ,"P", 1046));
Productos.push(new Tienda(4006,"Juguete Huese flexible furacao maxbone n°3","juguetes",5,"../juguetes/src/img/perro/ju4006-P.jpg" ,"P", 1542));
Productos.push(new Tienda(4007,"Juguete Huese flexible furacao maxbone n°2 ","juguetes",5,"../juguetes/src/img/perro/ju4007-P.jpg" ,"P", 988));
Productos.push(new Tienda(4008,"Juguete Huese flexible furacao superbone n°3 ","juguetes",5,"../juguetes/src/img/perro/ju4008-P.jpg" ,"P", 1630));
Productos.push(new Tienda(4009,"Juguete de ingenio tortuga para sanck cancat","juguetes",5,"../juguetes/src/img/perro/ju4009-P.jpg" ,"P", 1292));
Productos.push(new Tienda(4010,"Juguete smart campana porta alimento ","juguetes",5,"../juguetes/src/img/perro/ju4010-P.jpg" ,"P", 1710));
Productos.push(new Tienda(4011,"Gigwi orange mosnter rope squeaker m (26cm) ","juguetes",5,"../juguetes/src/img/perro/ju4011-P.jpg" ,"P", 1666));



Productos.push(new Tienda(4000,"Giroscio wobilly -1","juguetes",5,"../juguetes/src/img/gato/ju4000-G.jpg" ,"G", 782));
Productos.push(new Tienda(4001,"Classic Speingy worms ","juguetes",5,"../juguetes/src/img/gato/ju4001-G.jpg" ,"G", 964));
Productos.push(new Tienda(4002,"Cobayo vibrante cat toy","juguetes",5,"../juguetes/src/img/gato/ju4002-G.jpg" ,"G", 454));
Productos.push(new Tienda(4003,"Juguete interactivo gato Butterfly ","juguetes",5,"../juguetes/src/img/gato/ju4003-G.jpg" ,"G", 1310));
Productos.push(new Tienda(4004,"Juguete interactivo gato Meow Planet","juguetes",5,"../juguetes/src/img/gato/ju4004-G.jpg" ,"G", 1960));
Productos.push(new Tienda(4005,"Juguete interactivo Gato Fortune","juguetes",5,"../juguetes/src/img/gato/ju4005-G.jpg" ,"G", 1485));
Productos.push(new Tienda(4006,"Juguete interactivo Gato Molino ","juguetes",5,"../juguetes/src/img/gato/ju4006-G.jpg" ,"G", 1310));
Productos.push(new Tienda(4007,"Juguete interactivo Gato Track Ball","juguetes",5,"../juguetes/src/img/gato/ju4007-G.jpg" ,"G", 3222));
Productos.push(new Tienda(4008,"Juguete gato porta alimento con cañita","juguetes",5,"../juguetes/src/img/gato/ju4008-G.jpg" ,"G", 1844));
Productos.push(new Tienda(4009,"Juguete gato torre 3 pisos con carita","juguetes",5,"../juguetes/src/img/gato/ju4009-G.jpg" ,"G", 1690));
Productos.push(new Tienda(4010,"Juguete gato rombo plastico ferplast x3 ","juguetes",5,"../juguetes/src/img/gato/ju4010-G.jpg" ,"G", 684));
Productos.push(new Tienda(4011,"Rascals pelota dosificadora gato","juguetes",5,"../juguetes/src/img/gato/ju4011-G.jpg" ,"G", 734));
Productos.push(new Tienda(4013,"Comedero interactivo food tree catit","juguetes",5,"../juguetes/src/img/gato/ju4013-G.jpg" ,"G", 5154));
Productos.push(new Tienda(4014,"Rascador cilindrico 28,8 cm","juguetes",5,"../juguetes/src/img/gato/ju4014-G.jpg" ,"G", 2040));



const prod = document.getElementById("prod"); 


/*Devuelve todos los productos del market  */
function crearDivsTodo(){
    crearDivsGatos()
    crearDivsPerros()
}


/* --------------filtros */

function crearDivsPerros(){
    crearDivsAlimentosPerro();
    crearDivsCuchasPerro();
    crearDivsAccesoriosPerro();
    crearDivsJuguetesPerro();
}



function crearDivsGatos(){
    crearDivsAlimentosGato();
    crearDivsCuchasGato();
    crearDivsAccesoriosGato();
    crearDivsJuguetesGato();
}


function crearDivsCuchas(){
    crearDivsCuchasGato();
    crearDivsCuchasPerro();
}


 function crearDivsJuguetes(){
     crearDivsJuguetesGato();
     crearDivsJuguetesPerro();
 
}


 function crearDivsAlimentos(){
    crearDivsAlimentosPerro();
    crearDivsAlimentosGato();
}


 function crearDivsAccesorios(){
     crearDivsAccesoriosGato();
     crearDivsAccesoriosPerro();

}




/* ----------------Filtros compartidos---------------- */



function crearDivsAccesoriosPerro(){
    let filtroAccesoriosPerro = Productos.filter(elem => elem.seccion ==="accesorios" && elem.tipo === "P")

    for (let i = 0; i < filtroAccesoriosPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="${filtroAccesoriosPerro[i].img}" alt=""></div>
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
            <div class="prod__img"><img src="${filtroAccesoriosGato[i].img}" alt=""></div>
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

 function crearDivsCuchasGato(){
    let filtroCuchasGato = Productos.filter(elem => elem.seccion ==="cuchas" && elem.tipo === "G")

    for (let i = 0; i < filtroCuchasGato.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="${filtroCuchasGato[i].img}" alt=""></div>
            <div class="prod__title"><p> ${filtroCuchasGato[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroCuchasGato[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/* crearDivsCamitasGato()   */



 function crearDivsCuchasPerro(){
    let filtroCuchasPerro = Productos.filter(elem => elem.seccion ==="cuchas" && elem.tipo === "P")

    for (let i = 0; i < filtroCuchasPerro.length; i++){
        prod.innerHTML += `    
        <a href="#"><div class="prod__marco">
            <div class="prod__img"><img src="${filtroCuchasPerro[i].img}" alt=""></div>
            <div class="prod__title"><p> ${filtroCuchasPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroCuchasPerro[i].precio}</p></div>
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
            <div class="prod__img"><img src="${filtroJuguetesPerro[i].img}" alt=""></div>
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
            <div class="prod__img"><img src="${filtroJuguetesGato[i].img}" alt=""></div>
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
            <div class="prod__img"><img src="${filtroAlimentosGato[i].img}" alt=""></div>
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
            <div class="prod__img"><img src="${filtroAlimentosPerro[i].img}" alt=""></div>
            <div class="prod__title"><p> ${filtroAlimentosPerro[i].nombre}</p> </div>
            <div class="prod__precio"><p>$${filtroAlimentosPerro[i].precio}</p></div>
            <div class="prod__agregar"><p>Agregar al Carrito</p></div> 
        </div></a> 
    `;
    }
}

/* crearDivsAlimentosPerro()   */


let Ali=document.getElementById("Alimentos");


let Alimentos = document.getElementById("Alimentos")
let Accesorios = document.getElementById("Accesorios")
let Juguetes = document.getElementById("Juguetes")
let cuchas = document.getElementById("Cuchas")
let Gatos = document.getElementById("Gatos")
let Perros = document.getElementById("Perros")
let TodosLosProductos = document.getElementById("TodosProductos")

/* ----------- chekeo de filtraje simple. --------------- */

function checkPerro(){
    if (Perros.checked){
        prod.innerHTML ="";
        crearDivsPerros()
    }else{
        Perros.addEventListener("click", function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsPerros()
            }
        });
    }
}

function checkGato(){
    if (Gatos.checked){
        prod.innerHTML ="";
        crearDivsGatos()
    }else{
        Gatos.addEventListener("click", function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsGatos()
            }
        });
    }
}

function checkAlimentos(){
    if (Alimentos.checked){
        prod.innerHTML ="";
        crearDivsAlimentos()
    }else{
        Alimentos.addEventListener("click", function(){
            if (Alimentos.checked){
                prod.innerHTML ="";
                crearDivsAlimentos()
            }
        });
    }
}

function checkJuguetes(){
    if (Juguetes.checked){
        prod.innerHTML ="";
        crearDivsJuguetes()
    }else{
        Juguetes.addEventListener("click", function(){
            if (Juguetes.checked){
                prod.innerHTML ="";
                crearDivsJuguetes()
            }
        });
    }
}

function checkCuchas(){
    if (Cuchas.checked){
        prod.innerHTML ="";
        crearDivsCuchas()
    }else{
        Cuchas.addEventListener("click", function(){
            if (Cuchas.checked){
                prod.innerHTML ="";
                crearDivsCuchas()
            }
        });
    }
}

function checkAccesorios(){
    if (Accesorios.checked){
        prod.innerHTML ="";
        crearDivsAccesorios()
    }
    else{
        Accesorios.addEventListener("click", function(){
            if (Accesorios.checked){
                prod.innerHTML ="";
                crearDivsAccesorios()
            }
        });
    }
    
}


/* -------------Checkeo de filtraje doble --------------- */


function checkJueguetesPerroT(){
    if (Perros.checked){
        Juguetes.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsJuguetesPerro()
        });
    }else{
        Perros.addEventListener("click", function(){
            Juguetes.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsJuguetesPerro()
                }
            });
        });
    }
    Juguetes.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsJuguetesPerro()
            }
        })
    });
}


function checkPerroAccesoriosT(){
    if (Perros.checked){
        Accesorios.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsAccesoriosPerro()
        });
    }else{
        Perros.addEventListener("click", function(){
            Accesorios.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsAccesoriosPerro()
                }
            });
        });
    }
    Accesorios.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsAccesoriosPerro()
            }
        })
    });

}

function checkAlimentosPerrosT(){
    if (Perros.checked){
        Alimentos.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsAlimentosPerro()
        });
    }else{
        Perros.addEventListener("click", function(){
            Alimentos.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsAlimentosPerro()
                }
            });
        });
    }
    Alimentos.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsAlimentosPerro()
            }
        })
    })
}

function checkCuchasPerroT(){
    
    if (Perros.checked){
        prod.innerHTML ="";
        crearDivsCuchasPerro()
    }else{
        Perros.addEventListener("click", function(){
            Cuchas.addEventListener("click", function(){
                if (Perros.checked){
                    prod.innerHTML ="";
                    crearDivsCuchasPerro()
                }
            });
        });
    }
    Cuchas.addEventListener("click", function(){
        Perros.addEventListener("click",function(){
            if (Perros.checked){
                prod.innerHTML ="";
                crearDivsAlimentosPerro()
            }
        })
    })
}

function checkAlimentosGatoT(){

    if (Gatos.checked){
        prod.innerHTML ="";
        crearDivsAlimentosGato()
    }else{
        Gatos.addEventListener("click", function(){
            Alimentos.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsAlimentosGato()
                }
            });
        });
    }
    Alimentos.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsAlimentosGato()
            }
        })
    })
}


function checkGatoAccesoriosT(){
    if (Gatos.checked){
        prod.innerHTML ="";
        crearDivsAccesoriosGato()
    }else{
        Gatos.addEventListener("click", function(){
            Accesorios.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsAccesoriosGato()
                }
            });
        });
    }
    Accesorios.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsAccesoriosGato()
            }
        })
    })
}

function checkJueguetesGatoT(){
    if (Gatos.checked){
        prod.innerHTML ="";
        crearDivsJuguetesGato()
    }else{
        Gatos.addEventListener("click", function(){
            Juguetes.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsJuguetesGato()
                }
            });
        });
    }
    Juguetes.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsJuguetesGato()
            }
        })
    })
}

function checkCuchasGatoT(){
    if (Gatos.checked){
        Cuchas.addEventListener("click", function(){
            prod.innerHTML ="";
            crearDivsCuchasGato()
        });
    }else{
        Gatos.addEventListener("click", function(){
            Cuchas.addEventListener("click", function(){
                if (Gatos.checked){
                    prod.innerHTML ="";
                    crearDivsCuchasGato()
                }
            });
        });
    }
    Cuchas.addEventListener("click", function(){
        Gatos.addEventListener("click",function(){
            if (Gatos.checked){
                prod.innerHTML ="";
                crearDivsCuchasGato()
            }
        })
    })
}

function checkTodosLosProductos(){
    if (TodosLosProductos.checked){
        prod.innerHTML ="";
        crearDivsTodo();
    }else{
        TodosLosProductos.addEventListener("click", function(){
            if (TodosLosProductos.checked){
                prod.innerHTML ="";
                crearDivsTodo();
            }
        });
    }
}


function check(){

    /* check simple */
 
    checkPerro();
    checkGato();
    checkAlimentos();
    checkJuguetes();
    checkCuchas();
    checkAccesorios();

    /* check doble perro*/

    checkJueguetesPerroT();
    checkPerroAccesoriosT();
    checkAlimentosPerrosT();
    checkCuchasPerroT();
 
    /* check doble gato*/

    checkJueguetesGatoT();
    checkGatoAccesoriosT();
    checkAlimentosGatoT();
    checkCuchasGatoT();

    /* check todos los productos */
    checkTodosLosProductos();
}

check()


