module.exports.copy = function(passedObj) {
  var rtnObj = {};
  for (var prop in passedObj) {
    rtnObj[prop] = passedObj[prop];
  }
  return rtnObj;
}

module.exports.extend = function(passedObj1, passedObj2) {
  for (var prop in passedObj2) {
    passedObj1[prop] = passedObj2[prop];
  }
  return passedObj1;
}

module.exports.hasElems = function(passedObj, passedArray) {
  var rtnValue = true;
  for (var counter = 0; counter < passedArray.length; counter++) {
    if (passedObj[passedArray[counter]] == null) {
      rtnValue = false;
    }
   }
  return rtnValue;
}