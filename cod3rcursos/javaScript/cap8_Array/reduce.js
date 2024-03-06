const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
    
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual)    {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)

//reduce 2 

const aluno = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
    
]

Array.prototype

// Desafio 1: Algum aluno é bolsista?
const todosBolsistas = (resultados,bolsista) => resultados &&bolsista
console.log(alunos.map(a => a.bolsista))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(algumBolsista))


//Implementar reduce

Array.prototype.reduce2 = function(callback, valorInicial)  {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador2 = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++)   {
        acumulador2 = callback(acumulador2, this[i], i, this)
    }
    return acumulador2
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6,]
console.log(nums.reduce2(soma, 21))