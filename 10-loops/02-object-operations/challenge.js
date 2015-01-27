module.exports.copy = function(object){
  var newObject = {};
  for(var property in object){
     newObject[property] = object[property];   
  }
   return newObject;
}


module.exports.extend = function(dest, src){  
  for(var property in src){
    dest[property] = src[property];
  }
	return dest;
};

module.exports.hasElems = function(object, array){   
	for(var i=0; i<array.length;){
		if(object.hasOwnProperty(array[i])){
          i++;
        }else{
          return false; 
        }
      }
   return true;
}
