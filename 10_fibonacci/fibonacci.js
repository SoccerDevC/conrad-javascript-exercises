const fibonacci = function(value) {
    let num = parseInt(value);
    if(num ===0){
        return 0;
    }
    else if(num < 0){
        return "OOPS";
    }
    else{
        const fibonnaciSequence = [];
        for(let i=0; i<num; i++){
            if(i===0 || i ===1){
                fibonnaciSequence[i] = 1;
            }
            else{
                fibonnaciSequence[i] = fibonnaciSequence[i-1] + fibonnaciSequence[i-2];
            }
        }
        return fibonnaciSequence[fibonnaciSequence.length-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
