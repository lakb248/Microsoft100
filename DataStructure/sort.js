//插入排序
var insertSort = function(array){
	var length = array.length ;
	var temp = 0 , j = 0 ;
	for(var i = 1 ; i < length ; i ++){
		temp = array[i] ;
		j = i - 1 ;
		while(j >= 0 && array[j] > temp){
			
			array[j + 1] = array[j] ;
			j -- ;

		}
		array[j + 1] = temp ;
	}
} ;
//冒泡排序
var bubbleSort = function(array){
	var length = array.length ;
	var temp = 0 , flag = false ;
	for(var i = 0 ; i < length ; i ++){
		flag = false ;
		for(var j = 1 ; j < length - i ; j ++){
			if(array[j] < array[j - 1]){
				temp = array[j] ;
				array[j] = array[j - 1] ;
				array[j - 1] = temp ;
				flag = true ;
			}
		}
		if(!flag)
			break ;
	}
} ;

var shellSort = function(array){
	var length = array.length ;
	var temp = 0 , j = 0;
	for(var d = Math.floor(length/2) ; d > 0 ; d = Math.floor(d/2)){
		
		for(var i = d ; i < length ; i ++){
			temp = array[i] ;
			j = i - d ;
			while(j >=0 && array[j] > temp){
				array[j + d] = array[j] ;
				j = j - d ;
			}
			array[j + d] = temp ;
		}
		console.log(d + ":" + array) ;
	}
}

//快速排序
var quickSort = function(array,start,end){
	if(start < end){
		var mid = partition(array,start,end) ;
		console.log(mid) ;
		if(start < mid){
			quickSort(array,start,mid - 1) ;
		}
		if(mid < end){
			quickSort(array,mid + 1,end) ;
		}
	}

} ;

var partition = function(array,start,end){
	
	var temp = array[start] ;
	var i = start , j = end ;
	while(i < j){

		while(i < j && array[j] >= temp){
			j -- ;
		}

		if(i < j){
			array[i] = array[j] ;
		}
		
		while(i < j && array[i] <= temp){
			i ++ ;
		}
		if(i < j){
			array[j] = array[i] ;
		}

	}

	array[i] = temp ;
	return i ;
} ;

//堆排序
var heapSort = function(array){
	var length = array.length ;
	for(var i = length/2 - 1 ; i >=0 ; i --){
		adjustTree(array,i,length) ;
	}
	
	var temp = 0 ;
	for(var i = array.length - 1; i >= 0 ; i --){
		temp = array[i] ;
		array[i] = array[0] ;
		array[0] = temp ;
		adjustTree(array,0,i)
	}
} ;
var adjustTree = function(array,start,end){
	
	var index = start ;
	var max = array[start] ;

	for(var i = 2 * index + 1 ; i <= end - 1 ; i = 2 * i){
		if(i < end - 1 && array[i] < array[i + 1]){
			i = i + 1 ;
		}
		if(max > array[i])
			break ;
		array[index] = array[i] ;
		index = i ;
	}

	array[index] = max ;

} ;

var array = [3,2,1,44,2,1,32,15,11] ;
//heapSort(array) ;
shellSort(array) ;
console.log(array) ;