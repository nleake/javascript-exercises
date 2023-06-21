const removeFromArray = function (arr, ...items) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (items.indexOf(element) === -1
        && typeof element === typeof arr[i]) { 
            newArray.push(element);
        }
    }
    return newArray;
};

removeFromArray([1, 2, 3], 2, 3, 4, 5, 6);

// Do not edit below this line
module.exports = removeFromArray;
