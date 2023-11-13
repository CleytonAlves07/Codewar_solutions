/*
DESCRIPTION:
Return the largest and smallest sum of 4 numbers possible within an array.

Examples:

[1, 3, 7, 5, 6, 9]
max = 27
min = 15
*/

function minMaxSum(arr) {
    arr.sort()
    let minSum = arr.slice(0, 4).reduce((acc, current) => acc + current, 0)
   
    let maxSum = arr.slice(-4).reduce((acc, current) => acc + current, 0)
 
    return maxSum, minSum;
}

minMaxSum([1, 3, 7, 5, 6, 9])