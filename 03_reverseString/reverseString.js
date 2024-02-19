const reverseString = function(word) {
    let newArray = word.split("");
    const reverseWord = [];
    let j=0;
    for(let i = newArray.length -1 ; i>=0 ; i--){
        reverseWord[j] = newArray[i];
        j++;
    }
    let newWord = reverseWord.join("");
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
