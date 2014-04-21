
var LinkedNode = function(value,next){
	this.value = value ;
	this.next = next ;
}

LinkedNode.prototype.toString = function(){
	var head = this ;
	var str = "" ;
	while(head != null){
		str += head.value + " " ;
		head = head.next ;
	}
	return str ;
}

exports.LinkedNode = LinkedNode ;