



var Queue = function(){
	this.list = new Array() ;
	this.front = this.rear = 0 ;
}

Queue.prototype.isEmpty = function() {
	return this.front === this.rear ;
};

Queue.prototype.enQueue = function(num){
	this.list.push(num) ;
	this.rear ++ ;
}

Queue.prototype.deQueue = function(){
	if(this.front === this.rear){
		return -1 ;
	}else{
		return this.list[this.front ++] ;
	}
}

Queue.prototype.toString = function(){
	var str = "" ;
	for(var i = this.front ; i < this.rear ; i ++){
		str += this.list[i] + " " ;
	}
	return str ;
}

var queue = new Queue() ;
console.log(queue.isEmpty()) ;
console.log(queue.enQueue(8)) ;
console.log(queue.enQueue(0)) ;
console.log(queue.deQueue()) ;
console.log(queue.toString()) ;

exports.Queue = Queue ;