fetch('https://randomuser.me/api').
    then(response =>{
      if(response.ok){
        return response.json(); 
      }
}).then((data) => console.log(`dados recebidos e processados: ${data}`)); 