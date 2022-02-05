const urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias"



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
        $(".provinciaCheck").html(crearLista(provincias,"select-provincias"))

        $("#select-provincias").change(function(e){
            getlocalidades(e.target.value)
        })
    }
})





function getlocalidades(id){
    let municip = document.querySelector(".localidadCheck select")
    $.get(`http://apis.datos.gob.ar/georef/api/localidades?provincia=${id}`, function(response, status){
        if (status === "success"){
            let localidades = response.localidades;
            console.log(...localidades)

            municip.innerHTML = ""
            for (let localidad of localidades){
                municip.innerHTML += `<select> <option>${localidad.nombre}</option> </select>`
            }
        }
    });
}

