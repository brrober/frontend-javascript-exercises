module.exports.getKeys = function(passedObject) {
  var rtnArray = [];
  var counter = 0;
  for (var prop in passedObject){
    rtnArray[counter] = prop;
    counter ++;
    }
  return rtnArray;
}

module.exports.getValues = function(passedObject) {
  var rtnArray = [];
  var counter = 0;
  for (var prop in passedObject){
    rtnArray[counter] = passedObject[prop];
    counter ++;
    }
  return rtnArray;
}

module.exports.objectToArray = function(passedObject) {
  var rtnArray = [];
  var counter = 0;
  for (var prop in passedObject){
    rtnArray[counter] = prop + " is " + passedObject[prop];
    counter ++;
    }
  return rtnArray;
}