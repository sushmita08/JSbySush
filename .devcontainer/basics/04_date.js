let newDate = new Date();

console.log(newDate);
console.log(newDate.toString());
console.log(new Date('2025-02-21'));
console.log(newDate.toLocaleDateString("default",{
    weekday: "long",
    "day":"2-digit",
    "minute":"numeric"
}));


