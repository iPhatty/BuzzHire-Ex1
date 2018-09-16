var test = require('tape');
var { toBinary, solution } = require('./solution');

test('tape is working', t => {
  t.equal(1, 1, '1 is equal to 1');
  t.end();
});
test('toBinary is working', t => {
  var actual = toBinary(30);
  var expected = '11110';
  t.equal(actual, expected, '30 is equal to 11110');
  t.end();
});
test('toBinary is working for negative value', t => {
  var actual = toBinary(-30);
  var expected = '';
  t.equal(actual, expected, '-30 is equal to empty string');
  t.end();
});
test('toBinary is working', t => {
  var actual = toBinary(130);
  var expected = '10000010';
  t.equal(actual, expected, '130 is equal to 10000010');
  t.end();
});
test('toBinary is working', t => {
  var actual = toBinary(2);
  var expected = '10';
  t.equal(actual, expected, '2 is equal to 10');
  t.end();
});
test('solution is working', t => {
  var actual = solution(2);
  var expected = 1;
  t.equal(actual, expected, 'solution(2) is equal to 1');
  t.end();
});
test('solution is working', t => {
  var actual = solution(30);
  var expected = 4;
  t.equal(actual, expected, 'solution(30) is equal to 4');
  t.end();
});
test('solution is working', t => {
  var actual = solution(250);
  var expected = 5;
  t.equal(actual, expected, 'solution(250) is equal to 5');
  t.end();
});
test('solution is working for zero', t => {
  var actual = solution(0);
  var expected = 0;
  t.equal(actual, expected, 'solution(0) is equal to 0');
  t.end();
});
test('solution is working for negative numbers', t => {
  var actual = solution(-100);
  var expected = 0;
  t.equal(actual, expected, 'solution(-100) is equal to 0');
  t.end();
});
