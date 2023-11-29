/*

In this exercise, a string is passed to a method and a new string 
has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space
 between words, and no leading/trailing spaces.
*/

// function makeString(s){
//   s = s.split(' ')
//   let array = []
//   for (value of s) {
//     array.push(value[0])
//   }
//   return array.join('')
// }

function makeString(s){
  return s.split(' ').reduce((acc, curr) => acc+=curr[0], '')
  
}


console.log(makeString("sees eyes xray yoat"));