"use strict"//treat js code as per newer version
//alert(3+3) // we are using nodejs not browser
//docs: mdn ECMA doc

let name = "sushmita"
let age = 30
let isLoggedIn = false

//undefined
//null
//object
// console.log(typeof age)
// console.log("2" < 1)
// console.log(null < 0)
// console.log(null <= 0)
// console.log(null >= 0)

const id = Symbol('123')
const diffId = Symbol('123')
// console.log(id === diffId)

const string = new String("Sushmita")
const string1 = new String("Gaikar")
const string2 = new String("Chogale")

console.log(`Hi, My name is ${string} and my surname is ${string1}, After marriage my surname was changed and now it is ${string2}`)

console.log(string.concat(string1));
console.log(string.concat(string2));
console.log(string.length);
console.log(string.charAt(5))
console.log(string.indexOf('s'));
console.log(string.toUpperCase())
console.log(string.split('-'));
console.log(string.trim())







