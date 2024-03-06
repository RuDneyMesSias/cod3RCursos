console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])   //Ao não passar parâmetros ele retorna 'undefined'


aprovados [3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados [9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)


aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia','Carros', 'Ana']

aprovados.splice(1, 1)  //Método splice flexível 
console.log(aprovados)
