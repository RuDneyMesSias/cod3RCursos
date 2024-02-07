{
    {
        {
            { 
                var sera = 'Sera????' // Uma variável definida por var so tem dois escopos possível 
                
            }
        }
    }
}

console.log(sera) //deve evitar criação de escopo global (pode gerar um grande problema ) 

function teste() {
    var local = 123
    console.log(local) //variável dentro de uma função e delimitado a função (escopo local)
}

teste()
//console.log(local) 

var numero = 1 
{
    var numero = 2 
    console.log('dentro = ', numero) //não existe escopo de bloco substituindo o valor 
}
console.log('fora =', numero)