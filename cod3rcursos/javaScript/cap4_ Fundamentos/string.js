const escola = "Cor3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))      //Valor da tabela Unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))      //A partir de 
console.log(escola.substring(0, 3))  // de até 

console.log('escola '.concat(escola).concat("!")) //concatenar 
console.log('Escola ' + escola + "!")


console.log(escola.replace(/\d/, 'e'))  //Substituindo caráteres
console.log(escola.replace(/\w/g, 'e')) //Substituindo todos caráteres 

console.log('Ana,maria, pedro'.split(`,`)) //Forma uma Array
