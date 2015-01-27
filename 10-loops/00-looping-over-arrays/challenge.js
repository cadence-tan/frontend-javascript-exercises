module.exports.sumNumbers = function(array){

	for(var i=0, sum=0; i< array.length; i++){
		sum += array[i];
}
	return sum;
};


module.exports.splitAndLowerCaseString = function(inputString){

	return inputString.toLowerCase().split(",");
 };


module.exports.addIndex = function(input){
  
  var string="", arrayOfStrings=[];
  
  for(var i=0; i<input.length; i++){
    string = i + " is " + input[i];
    arrayOfStrings.push(string);
  }
  return arrayOfStrings;
}

