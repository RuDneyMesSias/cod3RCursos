console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('p7)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //Data de referência 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) //Estritamente diferente 
console.log('10', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null) //Via de regra utilizar estritamente igual. Evitando confusão (efeito colateral) de tipo e valores 