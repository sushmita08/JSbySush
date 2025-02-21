const string1 ="sessionai"
let convArray = string1.split("")

console.log(convArray.length);

for (let i = 0; i < convArray.length-1; i++) {
    for (let j = 0; j < convArray.length -1 -i; j++) {
        if(convArray[j]>convArray[j+1]){
            let temp = convArray[j]
            convArray[j]=convArray[j+1]
            convArray[j+1]=temp
        }
        
    }
    
}
console.log(convArray.join(""));

