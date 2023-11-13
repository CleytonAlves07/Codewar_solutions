function cpfValidate(cpf) {
    
    let cpfWhithoutDigit = cpf.replace(/\D+/g, '')
    let comparisonDigit = cpfWhithoutDigit.slice(-2)
    
    cpfWhithoutDigit = Array.from(cpfWhithoutDigit)
    cpfWhithoutDigit = cpfWhithoutDigit.slice(0,9)

    initialValue = 10
    let acc = 0
    for(let i of cpfWhithoutDigit){
        acc += i * initialValue
        initialValue -= 1
    }
    digit1 = 11 - (acc % 11)
    
    if (digit1 > 9) return digit1 = 0;
    
    digit1 = digit1.toString()
    includesDigito1 = cpfWhithoutDigit.concat(digit1) 
    
    let acc2 = 0
    initialValue = 11
    for(let i of includesDigito1) {
        acc2 += i * initialValue
        initialValue -= 1
    }

    digit2 = 11 - (acc2 % 11)
    digit2 = digit2.toString()
   

    finalDigit = digit1 + digit2
    return console.log(finalDigit === comparisonDigit);

}

cpfValidate('705.484.450-52')