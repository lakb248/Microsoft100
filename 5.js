/*
	微软100题
	5.查找最小的k个元素
*/

var findTopK = function(array,k){
	
	var length = array.length ;
	var temp , flag = false ;
	for(var i = 0 ; i < k ; i ++){

		flag = false ;
		for(var j = i ; j < length ; j ++){
			if(array[j] < array[j + 1]){

				flag = true ;

				temp = array[j] ;
				array[j] = array[j + 1] ;
				array[j + 1] = temp ;
			}
		}
		if(!flag){break;}
	}

	for(var i = 0 ; i < k ; i ++){
		console.log(array[length - 1 - i]) ;
	}
}

findTopK([3,1,65,4,1,2],2) ;