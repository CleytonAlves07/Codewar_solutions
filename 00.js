function digitize(n) {
  n = n.toString().split('').reverse()
  let array = []
  for (let value of n) {
    array.push(Number(value))
  }

  return array
}

console.log(digitize(35231));