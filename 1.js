/*
	微软100题
	1.输入一棵二元查找树，将该二元查找树转换成一个排序的双向链表。
	要求不能创建任何新的结点，只调整指针的指向。
*/
var BSTreeNode = require("./tree").Tree ;
var Stack = require("./stack").Stack ;
var LinkedNode = require("./linkedNode").LinkedNode ;

var exchange = function(tree){
	var T = tree ;
	var last = new BSTreeNode() ;
	var head = last;
	var stack = new Stack() ;
	while(T || !stack.isEmpty()){
		while(T){
			stack.push(T) ;
			T = T.left ;
		}

		T = stack.pop() ;
		last.right = T ;
		last = T ;
		console.log(T.value) ;
		T = T.right ;
	}
	return head ;
}
/***test***/
var left = new BSTreeNode(3,null,null) ;
var right = new BSTreeNode(7,null,null) ;

var root = new BSTreeNode(5,left,right) ;
var head = exchange(root) ;

while(head.right){
	console.log(head.right.value) ;
	head = head.right ;
}
