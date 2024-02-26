const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200 
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto()    {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

//Cadeia de protótipos (prototype chain)

Object.prototype.atrr0 = '0' // não faça isso em casa 
const avo = {atrr1: 'A'}
const pai = {__proto__: avo, atrr2: 'B'}
const filho = {__proto__: pai, atrr3: 'C'}
console.log(filho.atrr0, filho.atrr1, filho.atrr2, filho.atrr3)


const carro = {
    valAtual: 0, 
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax)    {
            this.velAtual += delta
        }   else{
            this.velAtual = this.velMax
        }
    },
    status()    {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const Ferrari = {
    modelo: 'V40',
    velMax: 324 //shadowing 
}

const volvo1 = {
    modelo: 'V40',
    status()    {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //Definição de relação 
Object.setPrototypeOf(volvo1, carro)

console.log(ferrari)
console.log(volvo1)

volvo1.acelerarMais(300)
console.log(volvo1.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())


//Herança 3

const pai1 = {nome:'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai1)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai1,   {
    nome:   { value:    'Bia', writable: false, enumerable: true    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2)  {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}


//Herança 4

function MeuObjeto1() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function()  {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...

console.log((new MeuObjeto).__proto__===MeuObjeto.prototype)
console.log(MeuObjeto.__proto__=== Function.prototype)
console.log(Function.prototype.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__=== null)

//Herança 5

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function ()  {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'. reverse())

Array.prototype.first = function()  {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b,', 'c'].first())

String.prototype.toString = function()  {
    return 'Lascou Tudo'
}

console.log('Escola Cod3r'.reverse())


//Herança 6

function Aula(nome, videoID)    {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__= f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)