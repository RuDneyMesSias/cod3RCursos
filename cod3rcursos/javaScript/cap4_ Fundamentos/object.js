const prod1 ={}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço 

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blablá: 1,
        obj: {
            blablá: 2
        }
    } // notação literal de objeto 
}

console.log(prod2)

/*
    '{"nome": "Camisa Polo", "preco": 79.90 }'
    
    objeto é diferente do json (coleção textual para integrabilidade de sistemas )
*/

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())