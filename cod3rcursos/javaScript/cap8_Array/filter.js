const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: true},

]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))


//implementar Filter

Array.prototype.filter2 = function(callback)    {
    const newArray = []
    for (let i = 0; i < this.length; i++)   {
        if(callback(this[i], i, this))  {
            newArray.push(this[i])
        }
    }
    return newArray
}

const prod = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: true},

]

const caro2 = prod => prod.preco >= 2500
const fragil2 = prod => prod.fragil

console.log(prod.filter2(caro2).filter2(fragil))