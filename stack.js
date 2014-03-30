var Stack = function(){
	this.list = [];
	this.top = -1 ;
} ;
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
} ;
Stack.prototype.toString = function(){
	var length = this.list.length ;
	var str = "" ;
	for(var i = 0 ; i < length ; i ++){
		str += " " + this.list[i].value ;
	}
	return str ;
}

exports.Stack = Stack ;