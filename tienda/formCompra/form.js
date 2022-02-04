/* const urlProvincias = "http://apis.datos.gob.ar/georef/api/provincias"



function crearLista(array, id){
    
    let innerHTML = "";

    array.forEach(provincias => {
        innerHTML += `<option id="${provincias.id}"> ${provincias.nombre}</option>`
    });

    return `<select id="${id}"> ${innerHTML}</select>`


}


let provincias = [{id: 0 , nombre: "Selecciona una Provincia"}]

$.get(urlProvincias,function(response,status){
    if (status === "success"){
        provincias.push(...response.provincias)
        $(".provincias").append(crearLista(provincias,"select-provincias"))
    }
})

 */