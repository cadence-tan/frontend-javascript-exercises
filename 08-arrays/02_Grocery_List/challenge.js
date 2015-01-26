module.exports.addItem = function(item, itemList){
		
  if(itemList.toString().indexOf(item) == -1){   
    itemList.push(item);    
  }
     return itemList;
}


module.exports.reverseSortedList = function(list){

	return list.sort().reverse();
}