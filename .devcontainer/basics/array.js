const ar1 = [0,1,2,3,4,5]

console.log(ar1[5]);
console.log(ar1[7]);

const ar2 = new Array(4,5,6,7)
// console.log(ar2.concat(ar1));
// console.log(ar2.join());

ar2.push(9)
console.log(ar2);
ar2.pop(4)
console.log(ar2);

ar2.unshift(9)
console.log(ar2);
ar2.shift(0)
console.log(ar2);
console.log(ar2.includes(5));
console.log(ar2.indexOf(5));

//slice splice
console.log("A " + ar2);

const myar1 = ar2.slice(1,2)
console.log(myar1)
console.log("B " + ar2);
const myar2 = ar2.splice(1,2)
console.log("C " + ar2);

console.log(myar2)

const marvalHeros = ["ironman","spiderman","thor"]
const dc_heros = ["flash","batman","superman"]
console.log(marvalHeros.concat(dc_heros));
console.log([...marvalHeros, ...dc_heros]);

const anArray = [1,2,3,[4,5],6,7,[8,9,5]]
console.log(anArray.flat(1))
console.log(anArray.flat(2))
console.log(anArray.flat(Infinity))

console.log(Array.isArray("Sushmita"));
console.log(Array.from("Sushmita"));

let a = 100
let b= 200
let c = 300

console.log(Array.of(a,b,c));






