function fizzBuzz(numbers){
    fizzBuzzArray = []
    for(num of numbers) {
        if(num % 3 == 0 && num % 5 == 0) fizzBuzzArray.push('FizzBuzz')
        if(num % 3 == 0) fizzBuzzArray.push('Fizz')
        if(num % 5 == 0) fizzBuzzArray.push('Buzz')
        fizzBuzzArray.push(num)
}
    return console.log(fizzBuzzArray);
}


fizzBuzz([1, 3, 6, 8, 9, 10,15,  25, 28])