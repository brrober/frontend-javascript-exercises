module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return course;
}

module.exports.addProperty = function(object, newProp, newValue) {
  if (!object[newProp]) {
    object[newProp] = newValue;
  }
     return object;
  }

module.exports.formLetter = function(letter) {
  var formattedLetter = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
  return formattedLetter;
}

module.exports.canIGet = function(item, money) {
  var obj={
    'MacBook Air' : 999,
    'MacBook Pro' : 1299,
    'Mac Pro' :2499,
    'Apple Sticker' : 1
  }
  return obj[item]<=money;
  }
