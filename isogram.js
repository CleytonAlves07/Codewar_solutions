/*
DESCRIPTION:
Check if the string is an isogram. 
An isogram is a word where no letters are repeated

Examples:

isogram is a isogram
*/

function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

isIsogram('Inconstitucional')