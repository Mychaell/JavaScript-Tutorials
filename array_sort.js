//sorting in ascending order
/*function sortUp (array) {
    array.sort((a,b) => a - b);
}

const array = [3, 2, 1, 4, 5, 6, 8, 7, 9];
console.log(array.sort());*/

function sortDown (array) {
    array.sort((a,b) => {
        return b - a;
    });
}
