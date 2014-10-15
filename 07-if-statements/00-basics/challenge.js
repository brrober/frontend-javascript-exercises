module.exports.favoriteNumber = function(favNum, guessNum){
  if (favNum === guessNum){
    return "You got it!";
  }
  else if (favNum > guessNum){
    return "Too low";
  }
  else {
    return "Too high";
  }
};


module.exports.checkLock = function(num1, num2, num3, num4) {
  var num1Test = ((num1 == 3) || (num1 == 5) || (num1 ==7));
  var num3Test = ((num3 >= 5) && (num3 <= 100));
  var num4Test = ((num4 < 9) || (num4 > 20));
  if (num1Test && num2 == 2 && num3Test && num4Test) {
          return "correct";
          }        
  else{
    return "incorrect";
  }
}


module.exports.canIGet = function(item, money) {
  if ((item === 'MacBook Air' ) && (money >= 999)) {
    return true;
  }
  else if ((item === 'MacBook Pro') && (money >= 1299)) {
    return true;
  }
  else if ((item === 'Mac Pro') && (money >= 2499)) {
    return true;
  }
  else if ((item === 'Apple Sticker') && (money >= 1)) {
    return true;
  }
  else {
    return false;
  }
  }
 