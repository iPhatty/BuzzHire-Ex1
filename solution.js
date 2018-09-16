// converts number to binary
function toBinary(num) {
  // while loop, divide num by 2, if there is a remainder 1, add 1 to string, if no remainder, add 0 to string
  var binary = '';
  while (num > 0) {
    var oneOrZero = num % 2;
    binary += oneOrZero;
    // removes decimal
    num = Math.floor(num / 2);
  }
  // reverses string to get binary for num
  return [...binary].reverse().join('');
}

function solution(n) {
  // use toBinary function to get binary in string
  var binaryString = toBinary(n);
  // split binaryString by zero and place into an array e.g '1101' = ['11','1']
  var arr = binaryString.split('0');
  // use reduce to loop through arr and check for the greatest length
  return arr.reduce((prev, curr) => {
    if (curr.length > prev) {
      return curr.length;
    }
    return prev;
  }, 0);
}

module.exports = { toBinary, solution };
