/* Const cannot be reassigned (let can be reassigned)


let name = "Egide";
console.log(name);

name = "Jean Jacques Goldman"
console.log(name);

name = true;
console.log(name);

name = 42;
console.log(name); 
*/


/* 
// const needs to be initialized while being declared.
// Once declared a const variable is frozen.

let value;
value = "Moo!";
console.log(value);

const value2;
value2 = "Molo!";
console.log(value2);
 */

// Using the typeof operator.

const name = "Egide";
let age = 30;
let student = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof student);

console.log(typeof name, typeof age, typeof student);

console.log(typeof 42, typeof "Egide", typeof null, typeof undefined)