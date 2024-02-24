const palindromes = function (statement) {
    
   let newStatement = statement.split(" ").join("");
    newStatement = statement.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
   let reverseStatement = newStatement.split("").reverse().join("");
   return newStatement ===reverseStatement;
};

// Do not edit below this line
module.exports = palindromes;
