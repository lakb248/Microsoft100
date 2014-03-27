/*
	微软100题
	2.定义栈的数据结构，要求添加一个min函数，能够得到栈的最小元素。
	要求函数min、push以及pop的时间复杂度都是O(1)。
*/
var Stack = function(){
	this.array = [] ;
	this.top = -1 ;
	this.m = 100000 ;
} ;

Stack.prototype.push = function(ele) {
	if(ele < this.m){
		this.m = ele ;
	}
	this.array.push(ele) ;
	this.top ++ ;
};
Stack.prototype.pop = function(){
	return this.array[this.top --] ;
} ;
Stack.prototype.min = function(){
	return this.m ;
} ;
Stack.prototype.toString = function(){
	var str = "" ;
	for(var i = 0 ; i <= this.top ; i ++){
		str += this.array[i].toString() + " " ;
	}
	console.log(str) ;
};

var stack = new Stack() ;
stack.push(1) ;
stack.push(3) ;
stack.push(8) ;
console.log(stack.min()) ;
console.log(stack.pop()) ;
stack.toString() ;
