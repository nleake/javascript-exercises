const fibonacci = function(item) {
    item = Number.parseInt(item);
    if (item < 0 ) return "OOPS";
    const fibNumbers = [1, 1, 2, 3, 5, 8];
    if (item > fibNumbers.length) {
        while (item > fibNumbers.length) {
            let next = fibNumbers[fibNumbers.length - 1]
            let prior = fibNumbers[fibNumbers.length - 2]
            let newFib = next + prior;
            fibNumbers.push(newFib)
        }
    }
    return fibNumbers[item-1];
};
    
// Do not edit below this line
module.exports = fibonacci;
