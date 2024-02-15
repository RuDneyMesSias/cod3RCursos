let dobro = function (a)    {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a          // return implícito
console.log(dobro(Math.PI))

let ola = function ()   {
    return 'Ola'
}

ola = ()    =>   'Olá'
ola = _ => 'Olá'        //possuí um param
console.log(ola())


//arrowFunction2 "this" fixo 

function Pessoa()   {
    this.idade  =   0
    
    setInterval(()  =>  {
        this.idade++
        console.log(this.idade)
    }, 10000000)
}

new Pessoa

//arrowFunction3 "this" comparar comportamento 

let comparaComThis  = function  (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj   =   {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)