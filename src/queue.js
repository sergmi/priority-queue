const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize){this.maxSize = maxSize;}
		else{this.maxSize = 30;}
		this.heap = new MaxHeap;
		this.sizeValue = 0;
	}

	push(data, priority) {
		this.heap.push(data, priority);
		this.sizeValue++;
		if(this.sizeValue>this.maxSize){alert('maxSize is excedeed');}
	}

	shift() {
		if(this.heap.root === null){alert('this.heap is empty');}
		else{
			this.heap.pop();
			this.sizeValue--;
		}
	}

	size() {
		return this.sizeValue;
	}

	isEmpty() {
		if(this.sizeValue === 0){return true;}
		else {return false;}
	}
}

module.exports = PriorityQueue;
