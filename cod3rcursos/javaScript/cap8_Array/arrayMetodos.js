const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()   // retira o elemento da ultima posição
console.log(pilotos)

pilotos.push('Verstappen')  //add na ultima posição 
console.log(pilotos)

pilotos.shift() // remove da ultima posição
console.log(pilotos)

pilotos.unshift('Hamilton') //Add na primeira posição
console.log(pilotos)

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :{
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2)    // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)