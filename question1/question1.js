const lowerCaseWords = (arr) => {
    if (!Array.isArray(arr)) return "Invalid Input";
    return arr.filter(item => typeof item === 'string')
              .map(word => word.toLowerCase());
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray)); 