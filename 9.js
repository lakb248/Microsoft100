/*
	微软100题
	9.判断整数序列是不是二元查找树的后序遍历结果
	题目：输入一个整数数组，判断该数组是不是某二元查找树的后序遍历的结果。
	如果是返回 true，否则返回 false。
*/

function isSortTree(list,start,end){
	
	var root = list[end] ;
	var middle = end ;
	//找出分界点
	for(var i = start ; i < end ; i ++){
		if(list[i] > root){
			middle = i ;
			break ;
		}
	}
	//划分左右子树
	var left_start = start ,
		left_end = middle - 1,
		right_start = middle ,
		right_end = end - 1 ;
	console.log("left_start:" + left_start + ",left_end:" + left_end + ",right_start:" + right_start + ",right_end:" + right_end) ;

	var hasLeft = true 
		hasRight = true ;
	//判断左右子树是否为空
	if(left_start > left_end){
		hasLeft = false ;
	}
	if(right_start > right_end){
		hasRight = false ;
	}

	if(!hasLeft && !hasRight){
		return true ;
	}else if(hasLeft && !hasRight){
		if(isSortTree(list,left_start,left_end) && root > list[left_end]) 
			return true ;
	}else if(!hasLeft && hasRight){
		if(isSortTree(list,right_start,right_end) && root < list[right_end]){
			return true ;
		}
	}else{
		if((isSortTree(list,left_start,left_end) && root > list[left_end]) && 
		(isSortTree(list,right_start,right_end) && root < list[right_end])){
			return true ;
		}
	}

	return false ;

}

console.log(isSortTree([7,4,6,5],0,3)) ;
console.log(isSortTree([5,7,6,9,11,10,8],0,6)) ;