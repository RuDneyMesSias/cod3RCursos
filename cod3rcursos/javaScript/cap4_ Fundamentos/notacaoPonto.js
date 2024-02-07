console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'bola2'
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...') //A partir da notação ponto você pode criar tanto atributo, funções, literal  
    }
        
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')


console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()