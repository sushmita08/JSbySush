const array1 = [20,10,5,6,30]
let sortedArray = [];

// console.log(array1.sort((a,b) => b-a));
let len = array1.length;
// console.log(len);

for(let i=0;i<len -1;i++){
    for(let j=0;j<len-1-i;j++){
    if(array1[j]>array1[j+1]){
        let temp = array1[j]
        array1[j]=array1[j+1]
        array1[j+1]=temp
    }   
}
}
console.log(array1);





