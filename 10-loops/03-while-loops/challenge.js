module.exports.stream = function(conditionalFn, actionFn){     
  while(conditionalFn()){
    actionFn();
  }
}

module.exports.sumNumbers = function(numbers){   
  var i=0, sum=0;  
  while(i<numbers.length){
    sum += numbers[i];
    i++;
  }
  return sum;  
}

