
var LinkedNode = require("../DataStructure/linkedNode").LinkedNode ;

var LinkedList = function(head){
	if(head instanceof LinkedNode){
		this.head = head ;
	}else if(Object.prototype.toString.apply(head).toLowerCase() === "[object array]"){
		this.head = this.translateFromArray(head) ;
	}
}

LinkedList.prototype.deleteNode = function(num){
	var cur = this.head ;
	var pre = null ;

	while(cur.value !== num && cur.next !== null){
		pre = cur ;
		cur = cur.next ;
	}

	if(cur.value === num){
		if(cur === this.head){
			this.head = this.head.next ;
		}else{
			pre.next = cur.next ;
		}
	}else{
		console.log("Not Found") ;
	}
}

LinkedList.prototype.toString = function(){
	var head = this.head ;
	var str = "" ;
	while(head != null){
		str += head.value + " " ;
		head = head.next ;
	}
	return str ;
}

LinkedList.prototype.translateFromArray = function(array){
	
	var length = array.length ;
	var head = new LinkedNode(array[0],null) ;
	var cur = null , pre = head ;

	for(var i = 1 ; i < length ; i ++){
		cur = new LinkedNode(array[i],null) ;
		pre.next = cur ;
		pre = cur ;
	}

	return head ;
}

exports.LinkedList = LinkedList ;