//Resolução do execício 2 da lista.
const prompt = require('prompt-sync')()
let idade = parseInt(prompt('Digite sua idade: '))

if(idade >= 18){
    console.log('O usuário é maior de idade.')
}else{
    console.log('O usuário é menor de idade.')
}
