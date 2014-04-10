var Stack = require("./stack").Stack ;

var BSTreeNode = function(value,left,right){
	this.value = value ;
	this.left = left ;
	this.right = right ;
}

BSTreeNode.prototype.preOrder = function() {
	var T = this ;
	var stack = new Stack() ;
	if(T !== null){
		console.log(T.value) ;
		if(T.right !== null){
			stack.push(T.right) ;
		}
		if(T.left !== null){
			stack.push(T.left) ;
		}
	}

	while(!stack.isEmpty()){
		var node = stack.pop() ;
		console.log(node.value) ;
		if(node.right !== null){
			stack.push(node.right) ;
		}
		if(node.left !== null){
			stack.push(node.left) ;
		}
	}

};

BSTreeNode.prototype.postOrder = function(){
	var T = this ;
	var stack = new Stack() ;
	var tag ;
	while(T !== null || !stack.isEmpty()){
		while(T !== null){
			stack.push(T) ;
			T = T.left;
		}
		var node = stack.getTop() ;
		if(node.right === null || node.right === tag){
			console.log(node.value) ;
			stack.pop() ;
			tag = node ;
		}else{
			T = node.right ;
			stack.push(T) ;
			T = T.left ;
		}
	}
}

//var left = new BSTreeNode(3,new BSTreeNode(1,null,null),null) ;
//var right = new BSTreeNode(7,null,new BSTreeNode(6,null,null)) ;

//var root = new BSTreeNode(5,left,right) ;
//root.preOrder();
// preOrder(root) ;
// postOrder(root) ;
exports.Tree = BSTreeNode ;
exports.postOrder = postOrder ;

