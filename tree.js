
var BSTreeNode = function(value,left,right){
	this.value = value ;
	this.left = left ;
	this.right = right ;
}
var LinkedNode = function(value,next){
	this.value = value ;
	this.next = next ;
}

var Stack = function(){
	this.list = [];
	this.top = -1 ;
}
Stack.prototype.push = function(ele) {
	this.list[++this.top] = ele ;
};
Stack.prototype.pop = function(){
	if(this.top !== -1){
		var ele = this.list[this.top] ;
		this.top -- ;
		return ele ;
	}else{
		return null ;
	}
} ;
Stack.prototype.getTop = function(){
	if(this.top !== -1){
		return this.list[this.top] ;
	}else{
		return null ;
	}
} ;
Stack.prototype.isEmpty = function(){
	return this.top === -1 ;
}


var preOrder = function(T){
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

}

var postOrder = function(T){
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

var left = new BSTreeNode(3,new BSTreeNode(1,null,null),null) ;
var right = new BSTreeNode(7,null,new BSTreeNode(6,null,null)) ;

var root = new BSTreeNode(5,left,right) ;

preOrder(root) ;
postOrder(root) ;