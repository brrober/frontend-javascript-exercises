module.exports.reversePlusOne = function(passedArray) {
  passedArray.push(1);
  var arrayLength = passedArray.length;
  var lastItemIndex = passedArray.length - 1;
  var returnArray = [];
  for (var counter = 0; counter < arrayLength; counter++ ) {
    returnArray.push(passedArray[lastItemIndex]);
    lastItemIndex= lastItemIndex - 1;
    passedArray.pop();
  }
  return (returnArray);
}

module.exports.plusesEverywhere = function(passedArray) {
  var returnStr = "";
  var arrayLength = passedArray.length;
  for (var counter = 0; counter < arrayLength; counter++ ) {
    returnStr +=(passedArray[counter]);
    if (counter < (arrayLength - 1)) {
      returnStr +="+";          
    }
  }
  return returnStr;
}

module.exports.arrayQuantityPlusOne = function(passedArray) {
  var arrayLength = passedArray.length;
  return (arrayLength +1);
}