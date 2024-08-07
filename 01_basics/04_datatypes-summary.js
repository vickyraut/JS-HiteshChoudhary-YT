// Primitive
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbols
// 7. BigInt

// Symbol gives unique id
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Non-Primitives
// 1. Array
// 2. Object
// 3. Array

/* 
    Dynamically-typed languages are those (like JavaScript) where the interpreter 
    assigns variables a type at runtime based on the variable's value at the time.
*/

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
