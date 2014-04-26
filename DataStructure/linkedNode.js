
var LinkedNode = function(value,next){
	this.value = value ;
	this.next = next ;
}

LinkedNode.prototype.toString = function(){
	return this.value.toString() ;
}

exports.LinkedNode = LinkedNode ;