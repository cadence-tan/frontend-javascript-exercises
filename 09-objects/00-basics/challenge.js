module.exports.createCourse = function (courseTitle, courseDuration, courseStudents){

	return {title: courseTitle, duration: courseDuration, students: courseStudents};
}

module.exports.addProperty = function(object, newProp, newValue){
 
	if(!object[newProp]){
		object[newProp]= newValue;
	}
	 return object;
}

module.exports.formLetter = function(letter){ 
    return "Hello " + letter.recipient + "," + "\n\n" + letter.msg + "\n\n" + "Sincerely," + "\n" + letter.sender;
 }
  
  


module.exports.canIGet =  function(item, money){ 
  
    var priceList = {
        'MacBook Air' : 999,
        'MacBook Pro' : 1299,
        'Mac Pro' : 2499,
        'Apple Sticker': 1
    };

  
  
  
  if (money >= priceList['Apple Sticker'] && item == 'Apple Sticker') {
    return true;
  } else if (money >= priceList['MacBook Air'] && item == 'MacBook Air') {
    return true;
  } else if (money >= priceList['MacBook Pro'] && item == 'MacBook Pro') {
    return true;
  } else if (money >= priceList['Mac Pro'] && item == 'Mac Pro') {
    return true;
  } else if(priceList.item === 0) {
    return false;
  }else{
    return false;
  }

	
	
  

}