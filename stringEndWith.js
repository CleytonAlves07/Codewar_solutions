/*
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


function solution(str, ending){
    if (ending.length === 0) return true
    return str.slice(-(ending.length)) === ending;
  }


//   other solution

function solution2(str, ending){
    return str.endWith(ending);
}