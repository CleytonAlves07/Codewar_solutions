/*
DESCRIPTION:
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/


function highestRank(arr){
    let counts = {}
    arr.forEach((e) => {
        counts[e] = (counts[e] || 0) + 1
    });

    const biggestCount = Math.max(...Object.values(counts))

    let findKeys = []
    for(let key in counts) {
        if(counts[key] === biggestCount){
            findKeys.push(key)
        }
    }

    return findKeys = Math.max(...findKeys)
  
}

highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])
