/*
DESCRIPTION:
Create an encrypted password generator. 
Cryptography must contain 36 characters, letters and numbers.

Examples:
1v4q9B8GoDIwT54O5b4kWhXPvcBv84UKLQEA
troLv9jAt99oloUfCIDx0jrDkS188gWE6Omz
wiDQpVdM9pCVVbm2QdPh963t68nTWqx8zTW2

*/

function uuidGenerate(){
    possibleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    possibleCharacters.split('')
    let uuid = ''
    for(let i = 0; i < 36; i++) {
        randomNumber = Math.floor(Math.random()* 62)
        uuid += possibleCharacters[randomNumber]
    }
    
    return console.log(uuid);
}


uuidGenerate()