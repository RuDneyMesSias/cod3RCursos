/*
    Sentença de um programa é lida de cima para baixo, de tal forma para uso de uma variável você primeiro declara 
        No JavaScript isso não acontece 100% das vezes. Porque no caso do var ele sofre o "HOISTING" o próprio interpretador 
        joga para cima.
    
    */

        console.log('a =', a)
        var a = 2                   // Efeito HOISTING
        console.log('a =', a)


function teste() {
    console.log('a =', a)
    var a = 2                       // Efeito HOISTING
    console.log('a =', a)
}

/*teste()
console.log('a =', a)

console.log('b =', b)
let b = 2                            // Efeito HOISTING não funciona para let 
console.log('b =' b)
*/