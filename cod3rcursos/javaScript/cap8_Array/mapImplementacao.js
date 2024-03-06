const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

//  Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)



//Implementando map 


Array.prototype.map2 = function(callback)   {
    const newArray = []
    for (let i = 0; i < this.length; i++)   {
        newArray.push(callback(this[i], this))
    }
    return newArray

}

const carrinho1 = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

//  Retornar um array apenas com os preços 

const parObjeto = json => JSON.parse(json)
const apenaPreco = produto => produto.preco

const resultado1 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado1)
