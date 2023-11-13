/* 
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only 
if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/


function toCamelCase(str){
    str = str.split('');
      return str.map(function(word, i){
        if(word == '-' || word == '_'){
          word = str[i+1].toUpperCase();
          str.splice(i+1, 1);
        }
        return word;
      }).join('');
    }
    
    
    toCamelCase("the-stealth-warrior")

    // Other solution
    function toCamelCase2(str){
        str = str.match(/\w+/g)
        let camelCase = str.reduce((acc,word, i) => {
            if(i == 0) return acc+=word
            return acc+=upperFirstLetter(word)
        })
        console.log(camelCase);
        }
        function upperFirstLetter(word) {
            firstLetter = word[0]
            firstLetter = firstLetter.toUpperCase()
            restLetters = word.slice(1)
            return firstLetter + restLetters
        
        }
        
        toCamelCase2('qualquer-coisa-legal')
        