const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if(x == 5) {
        break       //ação de desvio de fluxo for/while/switch
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue    //ação de desvio de fluxo de continuação  
    }
    console.log(`${y} = ${nums[y]}`)
}

//Uso de rotulo com break

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')