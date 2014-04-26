/*
	微软100题
	2.定义栈的数据结构，要求添加一个min函数，能够得到栈的最小元素。
	要求函数min、push以及pop的时间复杂度都是O(1)。
*/
var Stack = require("../DataStructure/stack").Stack ;

var stack = new Stack() ;
stack.push(1) ;
stack.push(3) ;
stack.push(8) ;
console.log(stack.min()) ;
console.log(stack.pop()) ;
stack.toString() ;
