const fetch = require("node-fetch")

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
.then((response) => {
    return response.json()
}).then((data) => {
    const listaDrinks = data.drinks.map((item) =>{
        return item.strDrink + ' ' +  item.idDrink         
    })

    console.log(listaDrinks)
   
    
})