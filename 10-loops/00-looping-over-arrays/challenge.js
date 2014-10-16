module.exports.sumNumbers = function(passedArray) {
  var arrayLength = passedArray.length;
  var total = 0;
  for (var counter = 0; counter < arrayLength; counter++){
    total = total + passedArray[counter];
  }
  return total;
}

module.exports.splitAndLowerCaseString = function(inputString) {
  var splitStr = inputString.split(",");
  for (var counter = 0; counter < splitStr.length; counter++){
    splitStr[counter] = splitStr[counter].toLowerCase();
  }
  return splitStr;
}

module.exports.addIndex = function(inputArray) {
  var rtnArray = [];
  for (counter = 0; counter < inputArray.length; counter++){
    rtnArray[counter] = counter + " is " + inputArray[counter];
  }
  return rtnArray;
}
