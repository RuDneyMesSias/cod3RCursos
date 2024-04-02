// Arrow Function -> Sempre anonima


const soma1 =(a, b) => a + b
console.log(soma1(2, 3))


const soma =(a,b) => {
    return a + b
}
console.log(soma(2, 3))


//Obrigadoramente chamar return 

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros)  {
    let total = 0 
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
