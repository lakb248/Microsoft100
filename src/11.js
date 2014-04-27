/*
	微软100题
	11.求二叉树中节点的最大距离...
	如果我们把二叉树看成一个图，父子节点之间的连线看成是双向的，我们姑且定义"距离"为两节点之间边的个数。
	写一个程序，求一棵二叉树中相距最远的两个节点之间的距离。
	注:树的后序遍历过程中，栈里面存储的就是节点的路径
*/

var BSTreeNode = require("../DataStructure/treeNode").BSTreeNode ;
var Tree = require("../DataStructure/tree").Tree ;
var Stack = require("../DataStructure/stack").Stack ;

var getLongestDistance = function(tree){
	
	var T = tree.root ;
	var stack = new Stack() ;
	var tag , max = 0 , distance = 0 , cur = null ;
	while(T !== null || !stack.isEmpty()){
		while(T !== null){
			stack.push(T) ;
			T = T.left;
		}
		var node = stack.getTop() ;
		if(node.right === null || node.right === tag){
			//console.log(node.value) ;

			stack.pop() ;
			distance = stack.getLength() ;
			if(distance > max){
				max = distance ;
			}
			tag = node ;
		}else{
			T = node.right ;
			stack.push(T) ;
			T = T.left ;
		}
	}

	return max ;
}

var left = new BSTreeNode(1,new BSTreeNode(4,null,null),new BSTreeNode(5,null,new BSTreeNode(5,null,null))) ;
var right = new BSTreeNode(2,null,null) ;
var root = new BSTreeNode(3,left,right) ;
var tree = new Tree(root) ;
console.log(getLongestDistance(tree)) ;