const fetch = require("node-fetch");

fetch('https://randomuser.me/api/?results=5')
  .then((response) => {
    return response.json()
  }).then((data) =>  {

   for(let i = 0 ; i < data.results.length; i++){
      let nomes =  data.results[i].name.first
      let cidade = data.results[i].location.city 
      let estado = data.results[i].location.state
      let localizacao = data.results[i].location.street.name
      
    console.log('Nome: ' + nomes + '\n'
     + 'Localização: ' + localizacao + '\n' 
     + 'Cidade: ' + cidade + '\n'
     + 'Estado: ' + estado + '\n' +
     '----------------------------')

   }
  })