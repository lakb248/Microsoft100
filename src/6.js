/*
	微软100题
	6.给你 10 分钟时间，根据上排给出十个数，在其下排填出对应的十个数 
	要求下排每个数都是先前上排那十个数在下排出现的次数。 
	
	举一个例子， 
	数值: 0,1,2,3,4,5,6,7,8,9 
	分配: 6,2,1,0,0,0,1,0,0,0 
*/
var flag = false ;

var getFrequency = function(array,num){
	
	var length = array.length ;
	var frequency = 0 ;
	for(var i = 0 ; i < length ; i ++){
		if(array[i] === num){
			frequency ++ ;
		}
	}
	return frequency ;
}
var setNextBottom = function(top,bottom){
	
	var length = top.length ;
	var frequency ;
	var tag = true ;
	for(var i = 0 ; i < length ; i ++){
		frequency = getFrequency(bottom,top[i]) ;
		if(frequency !== bottom[i]){
			bottom[i] = frequency ;
			tag = false ;
		}
	}	
	flag = tag ;

}

var getBottom = function(top){
	var length = top.length ;
	var bottom = new Array(length) ;
	for(var i = 0 ; i < length ; i ++){
		bottom[i] = 0 ;
	}

	while(!flag){
		setNextBottom(top,bottom) ;
	}

	console.log(bottom) ;
}

getBottom([0,1,2,3,4,5,6,7,8,9]) ;