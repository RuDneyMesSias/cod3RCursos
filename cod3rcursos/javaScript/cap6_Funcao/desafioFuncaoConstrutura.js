function Pessoa(nome)   {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

/*
    Criar um objeto através função construtora, 
    como pode criar um objeto através de uma classe ou tb pode criar através da Factory
*/