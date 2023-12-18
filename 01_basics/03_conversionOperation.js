let score = "33"

console.log(typeof score); // String

let valNumber = Number(score)
console.log(typeof valNumber); // Number

score = "33abc"
valNumber = Number(score)
console.log(valNumber); //NaN
console.log(typeof valNumber); // number 

// "33" => 33
// "33abc" => NaN
// true => 1; false = 0
// "" => false; "vicky" => true

// ******************************OPERATIONS*************************************
let value = 3
let negValue = -value
console.log(negValue)

let str1 = "Vicky"
let str2 = "Raut"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// Sonme confusing opearations
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// "===" is used to strictly check that both variables are equal or Not means it check datatype and value both

console.log("2" == 2); // true
console.log("2" === 2); // false

