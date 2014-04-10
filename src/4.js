/*
	微软100题
	4.题目:输入一个整数和一棵二元树。
	从树的根结点开始往下访问一直到叶结点所经过的所有结点形成一条路径。
	打印出和与输入整数相等的所有路径。
*/
var Tree = require("./tree").Tree ;
var Stack = require("./stack").Stack ;
var postOrder = require("./tree").postOrder ;

var outputSumRoute = function(T,sum){
	var stack = new Stack() ,
		tempSum = 0 ,
		tag ;

	while(T !== null || !stack.isEmpty()){
		
		while(T !== null){
			stack.push(T) ;
			tempSum += T.value ;
			T = T.left ;
		}

		var node = stack.getTop() ;
		if(node.right !== null && node.right !== tag){
			T = node.right ;
			stack.push(T) ;
			tempSum += T.value ;
			T = T.left ;
		}else{
			if(node.right === null && node.right === null){
				if(tempSum === sum){
					console.log(stack.toString()) ;
				}
			}

			stack.pop() ;
			//console.log(node.value) ;
			tag = node ;
			tempSum -= node.value ;
		}
	}
}
var left = new Tree(2,new Tree(1,null,null),new Tree(1,null,null)) ;
var right = new Tree(1,new Tree(2,null,null),new Tree(2,null,null)) ;

var root = new Tree(1,left,right) ;
//postOrder(root) ;
outputSumRoute(root,4) ;