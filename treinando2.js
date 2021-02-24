let moment = require('moment')
let currencyFormatter = require('currency-formatter')

let arrayPessoa = ['nane' ]; 


let data = moment().calendar();
arrayPessoa.push(data)


let valorAtual = currencyFormatter.format(12000, {locale : 'pt-BR'})
arrayPessoa.push(valorAtual)
