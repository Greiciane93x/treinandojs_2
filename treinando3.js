
let arrayNumeros = [12,1,132] 

arrayNumeros.forEach((value) => {
    value % 2 === 0 ?  console.log('é um número par') : console.log('é um número ímpar')
})


const valorTotal = arrayNumeros.reduce((acc , c) => {
     return acc + c
})