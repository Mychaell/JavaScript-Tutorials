/*const ones = [1, 2, 3, 1, 1].filter((function(el) {
    return el === 1;
}));
console.log(ones);*/

//function to print string backwards
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
