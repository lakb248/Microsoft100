var Stack = require("./stack").Stack ;

var Tree = function(root){
	this.root = root ;
}

Tree.prototype.preOrder = function() {
	var T = this.root ;
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

Tree.prototype.midOrder = function(){
	var T = this.root ;
	var stack = new Stack() ;
	
	while(T !== null || !stack.isEmpty()){
		while(T !== null){
			stack.push(T) ;
			T = T.left ;
		}

		T = stack.pop() ;
		console.log(T.value) ;
		T = T.right ; 
	}
}

Tree.prototype.postOrder = function(){
	var T = this.root ;
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

exports.Tree = Tree ;
