/*
	微软100题
	7.给出俩个单向链表的头指针，比如 h1，h2，判断这俩个链表是否相交
*/

var LinkedNode = require("./linkedNode").LinkedNode ;

var findCrossPoint = function(l1,l2){
	var h1 = li,
		h2 = l2,
		len1,len2,len;

	while(h1 !== null){
		len1 ++ ;
		h1 = h1.next ;
	}

	while(h2 !== null){
		len2 ++ ;
		h2 = h2.next ;
	}

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
			return true ;
		}else{
			l1 = l1.next ;
			l2 = l2.next ;
		}
	}

	return false ;

}

