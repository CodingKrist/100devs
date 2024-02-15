// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

let str = "String"

function doubleChar(str) {

  return str.split('').map(x => x = x + x).join('')

  // let arr = str.split("")
  // let newArr = arr.forEach(x => x = `${x} + ${x}`)
  // return newArr
  //return newArr.join('')
}
