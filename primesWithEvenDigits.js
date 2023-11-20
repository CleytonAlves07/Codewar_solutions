/*
DESCRIPTION:
Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

Naming f(), the function that gives that prime, the above case and others will be like the following below.

f(1000) ---> 887 (even digits: 8, 8)

f(1210) ---> 1201 (even digits: 2, 0)

f(10000) ---> 8887

f(500) ---> 487

f(487) ---> 467
*/
function findPrimes(n) {
    let i = 0;
    let arrayPrime = [];
    
    while (i < n) {
        if (i === 1) i++
        if(i === 2) {arrayPrime.push(i); i++ }
        if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0){
            arrayPrime.push(i) 
        }
        i++
    }
    return arrayPrime
}


function evenInPrime(n){
    // let prime;
    
    let arrayPrime = findPrimes(n)

    let arrayPrimeWithEven = []
    arrayPrime.map((prime) => {
        let numberForString = prime.toString();
        numberForString = numberForString.split('')
        if (prime < 1000) {
            lessThan1_000(numberForString) ? arrayPrimeWithEven.push(prime) : prime

        }
        if (prime >= 1000 && prime <= 9999) {
            between1_000And9999(numberForString) ? arrayPrimeWithEven.push(prime) : prime
        }
        if(prime >=10000 && prime <= 99999) {
            between10_000And99_999(numberForString) ? arrayPrimeWithEven.push(prime) : prime
        }
        if (prime >= 100_000 && prime <= 999_999) {
            between100_000And999_999(numberForString) ? arrayPrimeWithEven.push(prime) : prime
        }
        if (prime >= 1_000_000 && prime <= 9_999_999){
            between1_000_000And9_999_999(numberForString) ? arrayPrimeWithEven.push(prime) : prime
        } 
        
        
    })
    let prime = arrayPrimeWithEven.slice(-1)
    return prime;
    
     
}

function lessThan1_000(numberForString) {
    if(numberForString[0] % 2 === 0 && numberForString[1] % 2 === 0) {
        return true
    }
    return false
}

function between1_000And9999(numberForString){
    if(numberForString[0] % 2 === 0 && numberForString[1] % 2 === 0) {
        if(numberForString[2] % 2 === 0){
            return true
        }
    }
    return false
}


function between10_000And99_999(numberForString){
    if(numberForString[0] % 2 === 0 && numberForString[1] % 2 === 0) {
        if(numberForString[2] % 2 === 0 && numberForString[3] % 2 === 0){
            return true
        }
    }
    return false
}

function between100_000And999_999(numberForString){
    if(numberForString[0] % 2 === 0 && numberForString[1] % 2 === 0) {
        if(numberForString[2] % 2 === 0 && numberForString[3] % 2 === 0){
            if(numberForString[4] % 2 === 0){
                return true
            }
        }
    }
    return false
}

function between1_000_000And9_999_999(numberForString) {
    if(numberForString[0] % 2 === 0 && numberForString[1] % 2 === 0) {
        if(numberForString[2] % 2 === 0 && numberForString[3] % 2 === 0){
            if(numberForString[4] % 2 === 0 && numberForString[5] % 2 === 0){
                return true
            }
        }
    }
    return false
}

evenInPrime(9_999_999)

