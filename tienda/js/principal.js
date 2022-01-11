
import{
    checkAlimentos,
    checkJuguetes,
    checkCuchas,
    checkAccesorios,
    checkTodosLosProductos
}from "./checkProductos.js"


import{
    checkPerro,
    checkJueguetesPerroT,
    checkCuchasPerroT,
    checkPerroAccesoriosT,
    checkAlimentosPerrosT,
}from "./perros/checkPerros.js"

import{
    checkGato,
    checkAlimentosGatoT,
    checkGatoAccesoriosT,
    checkJueguetesGatoT,
    checkCuchasGatoT,
}from "./gatos/checkGatos.js"



function check(){

    /* check simple */

    checkAlimentos();
    checkJuguetes();
    checkCuchas();
    checkAccesorios();

    /* check doble perro*/
    checkPerro();
    checkJueguetesPerroT();
    checkPerroAccesoriosT();
    checkAlimentosPerrosT();
    checkCuchasPerroT();

    /* check doble gato*/
    checkGato();
    checkJueguetesGatoT();
    checkGatoAccesoriosT();
    checkAlimentosGatoT();
    checkCuchasGatoT();

    /* check todos los productos */
    checkTodosLosProductos();
    
}

check()







/* --------------filtros */




