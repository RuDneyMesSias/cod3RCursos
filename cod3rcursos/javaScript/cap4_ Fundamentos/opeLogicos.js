/**
 *          TABELA VERDADE
 
 *  verdadeiro e verdadeiro     ->  verdadeiro 
 *  verdadeiro e falso          ->  falso
 *  falso e ?                   ->  falso 
 * 
 *  verdadeiro ou ?             -> verdadeiro
 *  falso ou verdadeiro         -> verdadeiro
 *  falso ou falso              -> falso
 * 
 *  verdadeiro xor verdadeiro   -> falso
 *  verdadeiro xor falso        -> verdadeiro
 *  falso xor verdadeiro        -> verdadeiro
 *  falso xor falso             -> falso
 * 
 *  !verdadeiro                 -> falso 
 *  !falso                      -> verdadeiro
 */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  // ou em javaScript ('||')
    const comprarTv50 = trabalho1 && trabalho2    //   e em javaScript ("&&")
    //const comprarT32 =!!(trabalho1 ^ trabalho2)   //  bitwise xor 
    const comprarT32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete          // Operador Unário 

    return { comprarSorvete, comprarTv50, comprarT32, manterSaudavel }
    
    /*
        Forma explicita declaração 

    return { comprarSorvete: comprarSorvete,
     comprarTv50: comprarTv50, 
     comprarT32: comprarT32,
      manterSaudavel: manterSaudavel }
      */
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

