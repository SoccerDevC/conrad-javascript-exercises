const removeFromArray = function(array, ...valuesToRemove) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (valuesToRemove.includes(array[i])) {
            continue; // Skip if the value matches any of the values to be removed
        }
        newArray.push(array[i]); // Add all other values to the new array
    }
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
