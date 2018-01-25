// function multiply(x, y){
//     console.log(x * y);
// }
// multiply(10, 2);

// function safeMultiply(x, y){
//     if (isNaN(x, y)) {
//         return 0;
//     } else {
//         return x * y;
//     }
// }
// console.log(safeMultiply(2, 20));

function safeMultiply(x, y){
    if (isNaN(x) || isNaN(y)) {
        return 0;
    } else {
        return x * y;
    }
}
console.log(safeMultiply("din mor", 20));