var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // preferencia ao escopo menor. Com ausência de valor busca o escopo mais abrangente
}
console.log('fora =', numero)