let mySym = Symbol("key1")
let myobj = {
    name:"Sushmita",
    email: "s@gmail.com",
    age:"20",
    isLoggedIn:true,
    "last name": "Gaikar",
    [mySym]:"mysymbol"
}

console.log(myobj['name']);
console.log(myobj.age);
console.log(myobj['last name']);

myobj.fun = function(){
    console.log(`My name is ${this.name} and my age is ${this.age}`)
}
myobj.fun()