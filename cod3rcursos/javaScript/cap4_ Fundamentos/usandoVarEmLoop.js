

    for (var i= 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)


//Usando var em Loop
const funcs = []

for(var i =0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Usando Let em Loop
