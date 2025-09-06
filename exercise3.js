//Resolução do exercicio 3

const prompt = require('prompt-sync')()

let numero = parseInt(prompt('Digite um número: '))

if (numero > 0){
    console.log('O número escolhido é positivo.')
} else if (numero < 0){
    console.log('O número escolhido é negativo.')
} else if (numero === 0){
    console.log('O número escolhido é nulo/zero.')
}else{
    console.log('Error')
}
