const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((total,currentItem) => total + currentItem,0 );
};

const multiply = function(nums2) {
  return nums2.reduce((total, currentItem)=> total*currentItem, 1);
};

const power = function(num1, num2) {
  const powerArray = [];
  for(let i =0; i<num2; i++){
    powerArray[i]=num1;
  }
	return powerArray.reduce((total,currentItem) => total*currentItem, 1)
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }else{

    const array = [];
    let curr = num;

    for(let i = 0; i<num; i++){
      array[i]=curr;
      curr--;
    }
    return array.reduce((total, currentItem)=> total*currentItem, 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
