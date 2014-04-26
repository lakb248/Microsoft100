

var BSTreeNode = function(value,left,right){
	this.value = value ;
	this.left = left ;
	this.right = right ;
}

BSTreeNode.prototype.toString = function(){
	return this.value.toString() ;
}

exports.BSTreeNode = BSTreeNode ;


