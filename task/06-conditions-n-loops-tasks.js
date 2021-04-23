"use strict";

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 !== 0) {
    return "Fizz";
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return "Buzz";
  } else if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else {
    return num;
  }
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n == 0 || n == 1) {
    var fact = 1;
  } else {
    var fact = parseInt(n);
    for (var i = 1; i < n; i++) {
      fact *= i;
    }
  }
  return fact;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  var sum = 0;
  for (var i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  let x0 = rect1.left;
  let y0 = rect1.top;
  let x1 = x0 + rect1.width;
  let y1 = y0 + rect1.height;

  let x2 = rect2.left;
  let y2 = rect2.top;
  let x3 = x2 + rect2.width;
  let y3 = y2 + rect2.height;

  if (
    x0 > x3 /* первый правее второго */ ||
    x1 < x2 /* первый левее второго */ ||
    y0 > y3 /* первый ниже второго */ ||
    y1 < y2 /* первый выше второго */
  ) {
    return false;
  } else {
    return true;
  }
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  var r = circle.radius;
  var cirx = circle.center.x;
  var ciry = circle.center.y;
  var px = point.x;
  var py = point.y;
  var хpc = px - cirx;
  var ypc = py - ciry;
  var d = Math.sqrt(Math.pow(хpc, 2) + Math.pow(ypc, 2));
  if (d < r) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let u = [a, b];
  let u1 = u.sort(function (a, b) {
    return a - b;
  });
  let start = u1[0];
  let end = u1[1];
  let u3 = [start, end];
  let u4 = u3.toString();
  if (isStartIncluded == true && isEndIncluded == true) {
    return `[${start}, ${end}]`;
  }
  if (isStartIncluded == true && isEndIncluded == false) {
    return `[${start}, ${end})`;
  }
  if (isStartIncluded == false && isEndIncluded == false) {
    return `(${start}, ${end})`;
  }
  if (isStartIncluded == false && isEndIncluded == true) {
    return `(${start}, ${end}]`;
  }
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  var y = 0;
  for (; num; num = Math.floor(num / 10)) {
    y *= 10;
    y += num % 10;
  }
  return y;
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  ccn = ccn + "";
  var sum = 0,
    max = ccn.length - 1;
  for (var j = max; j >= 0; j--) {
    var digit = parseInt(ccn[j]);
    if ((max - j) & 1) {
      var add = digit * 2;
      sum += add < 10 ? add : 1 + (add % 10);
    } else {
      sum += digit;
    }
  }

  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  var digits = num.toString().split("").map(Number);
  var sum = 0;
  for (var i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  var sumString = sum.toString();
  if (sumString.length > 1) {
    var sumDigits = sumString.split("").map(Number);
    var firstSumDigit = sumDigits.slice(0);
    var lastSumDigit = sumDigits.slice(1);
    return firstSumDigit[0] + lastSumDigit[0];
  } else {
    return sum;
  }
}
/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  let open = [];
  const openBrackets = new Set(["(", "[", "{", "<"]);
  const bracketCorrespondence = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  };

  for (let c of str) {
    if (openBrackets.has(c)) {
      open.push(c);
    } else if (
      bracketCorrespondence[c] &&
      open.pop() !== bracketCorrespondence[c]
    ) {
      return false;
    }
  }

  return !open.length;
}

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
  var dif = endDate - startDate;
  let sec = dif / 1000;
  if (sec <= 45) {
    return "a few seconds ago";
  }

  if (sec <= 90) {
    return "a minute ago";
  }
  if (sec <= 120) {
    return `${Math.round(dif / 60000)} minutes ago`;
  }
  if (sec <= 45 * 60) {
    return `${Math.floor(dif / 60000)} minutes ago`;
  }
  if (sec <= 90 * 60) {
    return "an hour ago";
  }
  if (sec <= 2 * 3600) {
    return `${Math.round(dif / 3600000)} hours ago`;
  }
  if (sec <= 4.5 * 3600) {
    return `${Math.floor(dif / 3600000)} hours ago`;
  }
  if (sec <= 5 * 3600) {
    return `${Math.round(dif / 3600000)} hours ago`;
  }
  if (sec <= 22 * 3600) {
    return `${Math.floor(dif / 3600000)} hours ago`;
  }

  if (sec <= 24 * 60 * 60) {
    return "a day ago";
  }
  if (sec <= 36 * 60 * 60) {
    return "a day ago";
  }
  if (sec <= 48 * 60 * 60) {
    return `${Math.round(dif / 86400000)} days ago`;
  }
  if (sec <= 25 * 24 * 60 * 60) {
    return `${Math.floor(dif / 86400000)} days ago`;
  }
  if (sec <= 45 * 24 * 60 * 60) {
    return "a month ago";
  }
  if (sec <= 60 * 24 * 60 * 60) {
    return `${Math.round(dif / (86400000 * 30))} months ago`;
  }

  if (sec <= 4.5 * 3600 * 30 * 24) {
    return `${Math.round(dif / (86400000 * 30))} months ago`;
  }
  if (sec <= 5 * 3600 * 30 * 24) {
    return `${Math.round(dif / (86400000 * 30))} months ago`;
  }
  if (sec <= 5 * 3600 * 30 * 24) {
    return `${Math.round(dif / (86400000 * 30))} months ago`;
  }
  if (sec <= 11.5 * 30 * 24 * 60 * 60) {
    return `${Math.round(dif / (86400000 * 30))} months ago`;
  }
  if (sec <= 1.5 * 12 * 30 * 24 * 60 * 60) {
    return "a year ago";
  }
  if (sec <= 2 * 12 * 30 * 24 * 60 * 60) {
    return "a year ago";
  }
  if (2 * 12 * 30 * 24 * 60 * 60 < sec) {
    return `${Math.floor(dif / (86400000 * 30 * 12))} years ago`;
  }
}
/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  var pathesArr = pathes.map((x) => x.split("/"));
  pathesArr.sort((a, b) => a.length - b.length);
  var theShortest = pathesArr[0];
  pathesArr.splice(0, 1);
  var res = [];
  var i = 0;
  while (pathesArr.every((x) => x[i] === theShortest[i])) {
    res.push(theShortest[i++] + "/");
  }
  return res.join("");
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  var rowsm1 = m1.length,
    colsm1 = m1[0].length,
    rowsm2 = m2.length,
    colsm2 = m2[0].length,
    C = [];
  if (colsm1 != rowsm2) return false;
  for (var i = 0; i < rowsm1; i++) C[i] = [];
  for (var k = 0; k < colsm2; k++) {
    for (var i = 0; i < rowsm1; i++) {
      var t = 0;
      for (var j = 0; j < rowsm2; j++) t += m1[i][j] * m2[j][k];
      C[i][k] = t;
    }
  }
  return C;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  if (
    position[0].join("") === `000` ||
    position[1].join("") === `000` ||
    position[2].join("") === `000` ||
    `${position[0][0]}${position[1][0]}${position[2][0]}` === `000` ||
    `${position[0][1]}${position[1][1]}${position[2][1]}` === `000` ||
    `${position[0][2]}${position[1][2]}${position[2][2]}` === `000` ||
    `${position[0][0]}${position[1][1]}${position[2][2]}` === `000` ||
    `${position[0][2]}${position[1][1]}${position[2][0]}` === `000`
  ) {
    return "0";
  } else if (
    position[0].join("") === `XXX` ||
    position[1].join("") === `XXX` ||
    position[2].join("") === `XXX` ||
    `${position[0][0]}${position[1][0]}${position[2][0]}` === `XXX` ||
    `${position[0][1]}${position[1][1]}${position[2][1]}` === `XXX` ||
    `${position[0][2]}${position[1][2]}${position[2][2]}` === `XXX` ||
    `${position[0][0]}${position[1][1]}${position[2][2]}` === `XXX` ||
    `${position[0][2]}${position[1][1]}${position[2][0]}` === `XXX`
  ) {
    return "X";
  }
}

module.exports = {
  getFizzBuzz: getFizzBuzz,
  getFactorial: getFactorial,
  getSumBetweenNumbers: getSumBetweenNumbers,
  isTriangle: isTriangle,
  doRectanglesOverlap: doRectanglesOverlap,
  isInsideCircle: isInsideCircle,
  findFirstSingleChar: findFirstSingleChar,
  getIntervalString: getIntervalString,
  reverseString: reverseString,
  reverseInteger: reverseInteger,
  isCreditCardNumber: isCreditCardNumber,
  getDigitalRoot: getDigitalRoot,
  isBracketsBalanced: isBracketsBalanced,
  timespanToHumanString: timespanToHumanString,
  toNaryString: toNaryString,
  getCommonDirectoryPath: getCommonDirectoryPath,
  getMatrixProduct: getMatrixProduct,
  evaluateTicTacToePosition: evaluateTicTacToePosition,
};
