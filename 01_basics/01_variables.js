const accountId = 12
let accountEmail = "vicky@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 //not allowed
console.log(accountId);

/*
    prefer not to use var
    beacause of issue in block scope and fnctional blocks
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);