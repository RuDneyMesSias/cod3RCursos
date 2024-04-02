 let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x: 3,
        y:4
    })
})


p.then(function(valor)  {
    console.log(valor)
})


//Estrutura de dados 
console.log(typeof Promise)
console.log(typeof p)

p.then(function(valor) {
    console.log(valor.x)
})


//Por lista

let l = new Promise(function(PromessaLista) {
    PromessaLista(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array) {
    return array [0]
}

function primeiraLetra(string)   {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()


l.then((valor) => {
    console.log(valor)
})

l
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
