import{
    crearDivsAccesoriosGato,
    crearDivsCuchasGato,
    crearDivsAlimentosGato,
    crearDivsJuguetesGato,
    crearDivsGatos
} from "./gatos/filtrosGatos.js"


import{
    crearDivsAccesoriosPerro,
    crearDivsCuchasPerro,
    crearDivsJuguetesPerro,
    crearDivsAlimentosPerro,
    crearDivsPerros
}from "./perros/filtrosPerros.js"


export{
    crearDivsCuchas,
    crearDivsJuguetes,
    crearDivsAccesorios,
    crearDivsAlimentos,
    crearDivsTodo
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


function crearDivsTodo(){
    crearDivsGatos()
    crearDivsPerros()
}
