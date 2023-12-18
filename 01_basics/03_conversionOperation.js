let score = "33"

console.log(typeof score); // String

let valNumber = Number(score)
console.log(typeof valNumber); // Number

score = "33abc"
console.log(typeof score); //NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false = 0
// "" => false; "vicky" => true