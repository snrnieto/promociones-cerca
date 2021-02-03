
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });


  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      html =`  
        <div class="card">
            <img src="${data[i].imagen}" class="promo-img"></img>
            <div class="promo-content">
                <h1 class="promo-title">${data[i].nombre}</h1>
                <p class="promo-description">${data[i].descripcion}</p>
                <button onclick="enviarEvento(${data[i].nombre})" class="btn-solicitar">Solicitar promoción</button>
            </div>
        </div>
    ` ;
      mainContainer.innerHTML+=html;
    }
  }


function enviarEvento(nombre){
  mixpanel.track("Video play", {"genre": "hip-hop", "duration in seconds": 42,"restaurante": nombre});
   console.log("Evento "+nombre);
}

