/*
	微软100题
	3.输入一个整形数组，数组里有正数也有负数。
	数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。
	求所有子数组的和的最大值。要求时间复杂度为O(n)。
*/

var maxSum = function(array){
	var length = array.length ;
	var maxSum = 0 ;
	var curSum = 0 ;

	for(var i = 0 ; i < length ; i ++){
		curSum += array[i] ;
		if(curSum < 0) curSum = 0 ;
		if(curSum > maxSum) maxSum = curSum ;
	}

	return maxSum ;
}

console.log(maxSum([1, -2, 3, 10, -4, 7, 2, -5])) ;
