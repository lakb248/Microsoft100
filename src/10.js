/*
	微软100题
	10.输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。
	句子中单词以空格符隔开。为简单起见，标点符号和普通字母一样处理。
	例如输入“I am a student.”，则输出“student. a am I”。
*/

var reverseDialog = function(str){
	
	var list = str.split(" ") ;

	var length = list.length ;

	for(var i = 0 ; i < length/2 ; i ++){

		var start = i , end = length - 1 - i ;
		var temp = list[start] ;
		list[start] = list[end] ;
		list[end] = temp ;
 
	}

	var result = "" ;
	for(var i = 0 ; i < length ; i ++){
		result += list[i] + " " ;
	}

	return result ;
}

console.log(reverseDialog("I am a good student.")) ;