var xmlhttp = new XMLHttpRequest();
var url = "http://airbnb.douglasmaia.com/api/properties";
var imoveis = document.getElementById('imoveis');
var request = new XMLHttpRequest();
request.open('GET', 'http://airbnb.douglasmaia.com/api/properties', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.response);
        data.map(function(imovel){
            console.log(imovel)
        var imoveldiv = `
        <div class="imovel">
            <img src="${imovel.photo}" alt="" width="150px">
            <h1>${imovel.price}</h1>
            <p>${imovel.name}</p>
            <button></button>

        </div>
        `;
        document.getElementById('imoveis').innerHTML += imoveldiv;

        })
  
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
console.log('asd')
  // There was a connection error of some sort
};

request.send();
