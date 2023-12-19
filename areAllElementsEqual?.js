function eqAll(elements) {
  if(elements === '' || []) return true
 return elements.split('').reduce((acc,cur,i_, array) => acc = cur === array[0]) 
}  


console.log(eqAll('aaaaa'));