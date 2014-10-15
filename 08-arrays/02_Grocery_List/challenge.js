module.exports.addItem = function(item, list) {
    for (var counter = 0; counter < list.length; counter++) {
    if (list[counter] != item){
      // countinue checking
    }
    else{
      counter = list.length +1;
    }
   }
  if (counter > list.length) {
    return list;
  }
  else {
    list.push(item);
    return list;
  }
}

module.exports.reverseSortedList = function(passedArray) {
  var sorted = true;
  var lastItemCounter = 0;
  while (sorted) {
    sorted =false;
    lastItemCounter ++;
    for (var counter = 0; counter < passedArray.length - lastItemCounter; counter++) {
      if (passedArray[counter] < passedArray[counter + 1]){
        var temp = passedArray[counter];
        passedArray[counter] = passedArray[counter +1];
        passedArray[counter+1] = temp;
        sorted = true;
      }
    }
  }
  return passedArray;
      }
   