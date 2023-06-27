const palindromes = function (str) {
    //get rid of non-alphanumeric chars
  const re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');    
  return reverseStr === lowRegStr;
}

// Do not edit below this line
module.exports = palindromes;
