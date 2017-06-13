/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString (num){
  return num.toString();
 }

// console.log(numberToString(2));


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num){
  return num + 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(num){
  return num - 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add (num1, num2){
  return num1+num2;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract (num1, num2){
  return num1-num2;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(num1, num2){
  return num1 * num2;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide (num1, num2){
  return num1/num2;
 }


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square (num){
  return num*num;
}


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(op, num1, num2){
  var result;
  switch (op){
    case 'add': 
      result = num1 + num2;
      console.log(num1 + ' + ' + num2 + ' = ' +  result);
      break;
    case 'subtract':
      result = num1 - num2;
      console.log(num1 + ' - ' + num2 + ' = ' +  result);
      break;
    case 'multiply':
      result = num1 * num2;
      console.log(num1 + ' * ' + num2 + ' = ' +  result);
      break;
    case 'divide':
      result = num1 / num2;
      console.log(num1 + ' / ' + num2 + ' = ' +  result);
      break;
    default: 
      console.log("Insert a valid operator");
  }
  return result;
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function isGreaterThan (x, y){
  if (x > y) {
    return true;
  }
  else {
    return false;
  }
 }




/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function isLessThan (x, y){
  if (x < y) {
    return true;
  }
  else {
    return false;
  }
 }

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 function areEqual (x, y){
  if (x === y) {
    return true;
  }
  else {
    return false;
  }
 }


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum (num1, num2){
  if (num1 < num2){
    return num1;
  }
  else {
    return num2;
  }
}



/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum (num1, num2){
  if (num1 > num2){
    return num1;
  }
  else {
    return num2;
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function isEven(num){
  if (num % 2 === 0){
    return true;
  }
  else {
    return false;
  }
 }


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd(num){
  if (num % 2 === 0){
    return false;
  }
  else {
    return true;
  }
 }

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

 function letterGrade (score, maxscore){
  var grade;
  var percentage = score/maxscore;
  console.log(percentage);
  switch (true){
    case (percentage > 0.89 && percentage <=1.0):
      grade = "A";
      break;
    case (percentage >0.79 && percentage <0.90):
      grade = "B";
      break;
    case (percentage >=0.70 && percentage <0.80):
      grade = "C";
      break;
    case (percentage >0.60 && percentage <0.70):
      grade = "D";
      break;
    case (percentage >0 && percentage <=0.59):
      grade = "F";
      break;
    default:
      console.log("Enter a valid percentage.");
  }
  return grade;
 }


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews(obj){
  if (Object.prototype.hasOwnProperty.call(obj,'reviews')){
    obj['reviews'] += 1;
  }
  else {
    obj['reviews'] = 1;
  }

  return obj;
}
 




/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine (str1, str2){
  var arr = [str1, str2];
  var str3 = arr.join(' ');
  return str3;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

 function createCircle (radius){
  var circle = {};
  circle.area = Math.PI * radius * radius;
  circle.circumference = Math.PI * 2 * radius;
  return circle;
 }