const repeatString = function(string, numTimes = 1) {
    let newString = '';
    if (string < 0 || numTimes < 0) { return 'ERROR'}
    for (let index = 0; index < numTimes; index++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
