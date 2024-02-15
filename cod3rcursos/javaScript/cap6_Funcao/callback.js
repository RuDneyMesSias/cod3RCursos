const fabricantes = ["Mercedes", "Audio", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})


//porque usar callback ?

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback

let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


//Com callback

notasBaixas2 = notas.filter(function (nota)  {
    return nota < 7 
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3  =   notas.filter(notasMenorQue7)
console.log(notasBaixas3)


//Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}
