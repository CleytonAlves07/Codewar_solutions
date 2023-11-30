/*
DESCRIPTION:
Return the number (count) of vowels 
in the given string.

We will consider a, e, i, o, u as vowels 
for this Kata (but not y).

The input string will only consist 
of lower case letters and/or spaces.

*/


// function getCount(str) {
//   str = str.match(/[aeiou]/gi)

//   return str !== null ? str.length : 0
// }

function getCount(str) {
  return (str.match(/[aeiou]/gi)||[]).length
}



// console.log(getCount("abracadabra"));
// console.log(getCount('pear tree'));
console.log(getCount("my pyx"));


