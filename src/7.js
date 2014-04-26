/*
	微软100题
	7.给出俩个单向链表的头指针，比如 h1，h2，判断这俩个链表是否相交
*/
/*
	如果两个链表相交，那么从相交节点到链表尾都应该是公共的，所以先把两个链表的表尾对齐，
	然后从较短的链表头开始比较，如果找到相同的就说明有相交，否则就没有
*/
var LinkedNode = require("../DataStructure/linkedNode").LinkedNode ;

var findCrossPoint = function(l1,l2){
	var h1 = l1,
		h2 = l2,
		len1 = 0,len2 = 0,len;

	while(h1 !== null){
		len1 ++ ;
		h1 = h1.next ;
	}
	console.log("l1:" + len1) ;
	while(h2 !== null){
		len2 ++ ;
		h2 = h2.next ;
	}
	console.log("l2:" + len2) ;
	if(len1 >= len2){
		len = len1 - len2 ;
		while(len > 0){
			l1 = l1.next ;
			len -- ;
		}
	}else{
		len = len2 - len1 ;
		while(len > 0){
			l2 = l2.next ;
			len -- ;
		}
	}

	while(l1 !== null && l2 !== null){
		if(l1 === l2){
			return l1 ;
		}else{
			l1 = l1.next ;
			l2 = l2.next ;
		}
	}

	return null ;

}
var commonNode = new LinkedNode(11,new LinkedNode(4,new LinkedNode(3,new LinkedNode(6,null)))) ;
var l1 = new LinkedNode(15,new LinkedNode(22,commonNode)) ;
var l2 = new LinkedNode(41,commonNode) ;

console.log(findCrossPoint(l1,l2).value) ;