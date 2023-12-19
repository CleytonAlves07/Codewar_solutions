/*
DESCRIPTION:
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

function onlyDuplicates(str) {
str = str.split('')
const duplicates = []
// let prevChar = str[0]

for(let char of str) {
//  if(char === prevChar){
//      duplicates.push(char)   
//  }
 if(str.includes(char)) {
     duplicates.push(char)
 }
//  prevChar = char

}
console.log(duplicates.join(''));

}

onlyDuplicates("abccdefee")

// onlyDuplicates('colloquial');




// str = str.split('')
// let letters = {}

// str.forEach((e) => {letters[e] = (letters[e] || 0) + 1})

// let duplicates = []
// for(let key in letters){
//     if(letters[key] > 1){
//         duplicates.push(key.repeat(letters[key]));
//     }
// }
// console.log(duplicates.join(''));