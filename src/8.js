/*
	微软100题
	8-3
	用一种算法来颠倒一个链接表的顺序。现在在不用递归式的情况下做一遍
*/
var LinkedNode = require("../DataStructure/linkedNode").LinkedNode ;

var reverse = function(l){
	var n1 = l ;

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
	return n2 ;
}

var l1 = new LinkedNode(15,new LinkedNode(22,new LinkedNode(11,new LinkedNode(4,new LinkedNode(3,new LinkedNode(6,null)))))) ;
console.log(l1.toString()) ;
var head = reverse(l1) ;
console.log(head.toString()) ;