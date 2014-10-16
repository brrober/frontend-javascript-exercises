module.exports.stream = function(passedFn1, passedFn2) {
  var rtnValue = passedFn1();
  while (rtnValue === true) {
    passedFn2();
    rtnValue = passedFn1();
  }
}

module.exports.sumNumbers = function(passedArray) {
  var counter = 0;
  var sum = 0;
  while (counter < passedArray.length) {
    sum = sum + passedArray[counter];
    counter ++;
  }
  return sum;
}

