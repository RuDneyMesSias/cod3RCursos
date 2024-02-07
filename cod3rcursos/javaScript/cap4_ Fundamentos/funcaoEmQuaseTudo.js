console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//dentro de uma função pode estar contido atributos, outras funções e objetos. 

//Função sem retorno 
function imprimirSoma(a, b){
        console.log(a+b)
    }

imprimirSoma(2, 3)
imprimirSoma(2)// NaN
imprimirSoma(2,10,4,5,6,)
imprimirSoma()// NaN

//Função com retorno 
function soma(a, b = 1){
    return a+ b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())//NaN

//Armazenando uma função em uma variável 
const imprimirSoma1 = function (a, b) {
    console.log(a + b)
}

imprimirSoma1(2, 3)

// Armazenando uma função arrow em uma variável 
const soma1 = (a, b)=> {
    return a + b 
}

console.log(soma1(2,3))

//retorno implícito
const subtracao =(a, b) => a - b //Arrow Function
console .log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')