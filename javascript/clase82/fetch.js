

fetch('https://apis.datos.gob.ar/georef/api/ubicacion?lat=-27.2741&lon=-66.7529')
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    })
    .then(algo => {
        console.log(algo)
    })
    .catch(error => {
        console.log(error);
    })



