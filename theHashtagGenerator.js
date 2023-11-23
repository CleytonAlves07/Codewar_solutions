function generateHashtag(str) {
    arrayStrings = str.match(/\S+/g);
    let stringLessSpaces = [] 
    arrayStrings?.map((word) => stringLessSpaces += upperFirstLetter(word))
    if(checkString(arrayStrings)) {
        return `#${stringLessSpaces}`;
    }
    return false;
}

function upperFirstLetter(word) {
    let firstLetter = word[0]
    firstLetter = firstLetter.toUpperCase()
    let othersLetters = word.slice(1)
    return firstLetter + othersLetters
}

function checkString(arrayStrings) {
    if(!arrayStrings || arrayStrings.length === 0) return false;
    for(string of arrayStrings) {
        if(string.length > 139) return false;
    }
    return true;
}


