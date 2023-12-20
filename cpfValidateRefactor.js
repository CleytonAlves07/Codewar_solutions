function cpfValidate(cpf) {
  let initialCpfClear = cpf.replace(/\D+/g, '')
  let cpfLessDigit = initialCpfClear.split('').slice(0,9)

  let initialValue = 10
  let acc = 0
  cpfLessDigit.map((num) => {
    acc += num * initialValue
    initialValue -= 1
  })

  let digit1 = 11 - (acc % 11)
  
  if (digit1 > 9) return digit1 = 0;

  let withDigit1 = cpfLessDigit.concat(digit1.toString())

  initialValue = 11
  let acc2 = 0
  withDigit1.map((num) => {
    acc2 += num * initialValue
    initialValue -= 1
  })

  let digit2 = 11 - (acc2 % 11)

  if (digit2 > 9) return digit2 = 0;
  
  let comparisonCpf = withDigit1.concat(digit2.toString()).join('')

  return comparisonCpf === initialCpfClear
}

console.log(cpfValidate('705.484.450-52'));
