/*
DESCRIPTION:

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
STRINGSFUNDAMENTALS
*/


function reverseWords(str) {
    arrayReverse = str.split(' ')
    for(i in arrayReverse) {
        arrayReverse[i] = arrayReverse[i].split('').reverse().join('')
    }
    return arrayReverse.join(' ');
}

reverseWords('The quick brown fox jumps over the lazy dog.')