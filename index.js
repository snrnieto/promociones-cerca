
var date = new Date();
var semana = new Array(7);
semana[0] = "Domingo";
semana[1] = "Lunes";
semana[2] = "Martes";
semana[3] = "Miercoles";
semana[4] = "Jueves";
semana[5] = "Viernes";
semana[6] = "Sábado";

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
    var dia_num=date.getDay()
    
    var obj = JSON.parse(JSON.stringify(data))
    promociones_hoy= obj.filter(item=>item.dias.includes(dia_num));
    promociones_hoy=shuffle(promociones_hoy)

  
    var dia = semana[dia_num];
    document.getElementById("titulo").innerHTML = "Promociones en Cali "+dia;


    appendData(promociones_hoy);
  
  
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
                <button class="btn-solicitar">Solicitar promoción</button>
            </div>
        </div>
    ` ;
      mainContainer.innerHTML+=html;
    }
  }

