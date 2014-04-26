/*
	微软100题
	8-3
	用一种算法来颠倒一个链接表的顺序。现在在不用递归式的情况下做一遍
*/
var LinkedList = require("../DataStructure/linkedList").LinkedList ;

var reverse = function(l){
	var n1 = l.head ;

	if(n1 === null){
		return ;
	}
	if(n1.next === null){
		return ;
	}

	var n2 = n1.next , n3 = null ;
	n1.next = null ;
	while(n2.next != null){
		n3 = n2.next ;
		n2.next = n1 ; 
		n1 = n2 ;
		n2 = n3 ;
	}
	n2.next = n1 ;
	l.head = n2 ;
}

var l1 = new LinkedList([15,22,11,4,3,6]) ;
console.log(l1.toString()) ;
reverse(l1) ;
console.log(l1.toString()) ;
l1.deleteNode(8) ;
console.log(l1.toString()) ;