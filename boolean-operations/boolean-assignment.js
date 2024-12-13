const fruit = true && "Bananas"

console.log(fruit);

console.log(false && "orange");
console.log(0 && "cucumbers");
console.log("" && 1);

console.log("---------------------");

console.log(true || "Bananas");
console.log("" || "Cucumbers");


console.log("---------------------");

console.log(0 ?? "singe");
console.log("" ?? "panda");
console.log(null ?? "elementor");