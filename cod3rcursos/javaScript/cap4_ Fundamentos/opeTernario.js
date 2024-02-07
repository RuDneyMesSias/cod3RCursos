const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

//expressão -> primeiro retorno se não segundo operador 

const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}


console.log(resultado(9.5))
console.log(resultado(5))