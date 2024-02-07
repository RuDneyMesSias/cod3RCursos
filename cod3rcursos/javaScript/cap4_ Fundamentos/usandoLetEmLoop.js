for (let i= 0; i < 10; i++) {
    console.log(i)  //escopo de bloco 
}
//console.log('i =', i)


//Usando Let em Loop adquirindo memoria "Hoisting"

const funcs = []

for(let i =0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
