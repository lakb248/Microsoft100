/*
	微软100题
	13.输入一个单向链表，输出该链表中倒数第 k 个结点。链表的倒数第 0 个结点为链表
	的尾指针。
*/

var LinkedList = require("../DataStructure/linkedList").LinkedList ;


var getTheK = function(list,k){
	
	var front = list.head , rear = list.head ;

	for(var i = 0 ; i < k && rear.next !== null ; i ++){
		rear = rear.next ;
	}

	while(rear !== null){
		front = front.next ;
		rear = rear.next ;
	}

	return front.value ;
}

var list = new LinkedList([1,2,3,4,5,6,7,8]) ;
console.log(getTheK(list,2)) ;