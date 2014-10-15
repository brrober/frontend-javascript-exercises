module.exports.newArray = function(arg1, arg2, arg3, arg4) {
  return [arg1, arg2, arg3, arg4];
};


module.exports.firstAndLast = function(passedArray) {
  var lastElementIndex = passedArray.length - 1;
  var lastElement = passedArray[lastElementIndex];
  var firstElement = passedArray[0];
  return [firstElement, lastElement];
};
