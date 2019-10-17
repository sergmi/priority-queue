const Node = require('./node');


class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		
	}

	pop() {
		if(this.root){this.detachRoot();}
	}

	detachRoot() {
		let value=this.root;
		this.root=null;
		return value;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if(!this.root){return true;}
		else{return false;}
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
					if(!this.root){
						this.root=node;
						this.parentNodes[0]=node;
					}
					else if(!this.root.left){
						this.root.appendChild(node);
						this.parentNodes[1]=node;
					}
					else if(!this.root.right){
						this.root.appendChild(node);
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=node;
					}
					else if(!this.root.left.left){
						this.root.left.appendChild(node);
						this.parentNodes[2]=node;
					}
					else if(!this.root.left.right){
						this.root.left.appendChild(node);
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=this.parentNodes[2];
						this.parentNodes[2]=node;
					}
					else if(!this.root.right.left){
						this.root.right.appendChild(node);
						this.parentNodes[3]=node;
					}
					else if(!this.root.right.right){
						this.root.right.appendChild(node);
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=this.parentNodes[2];
						this.parentNodes[2]=this.parentNodes[3];
						this.parentNodes[3]=node;
					} 
	}

	shiftNodeUp(node) {
					let value;
					value = this.root;

					if(value===node){
						item=value;					
					}
					if(value){
						if(value.left===node){							
							value.left.swapWithParent();
							this.root=value.parent;							
						}
						if(value.right===node){							
							value.right.swapWithParent();
							this.root=value.parent;							
						}
					}

				if(value){
					if(value.left){
						if(value.left.left===node){
							value.left.left.swapWithParent();						
						}
						if(value.left.right===node){
							value.left.right.swapWithParent();
						}
					}
					if(value.right){
						if(value.right.left===node){
							value.right.left.swapWithParent();
						}
						if(value.right.right===node){
							value.right.right.swapWithParent();
						}
					}
				}
				if(this.root!==node){
					this.shiftNodeUp(node);					
				}
				
				if(!this.root.left){
						this.parentNodes=[];
						this.parentNodes[0]=this.root;
					}
					else if(!this.root.right){
						this.parentNodes=[];
						this.parentNodes[0]=this.root;
						this.parentNodes[1]=this.root.left;
					}
					else if(!this.root.left.left){
						this.parentNodes=[];
						this.parentNodes[0]=this.root.left;
						this.parentNodes[1]=this.root.right;
					}
					else if(!this.root.left.right){
						this.parentNodes=[];
						this.parentNodes[0]=this.root.left;
						this.parentNodes[1]=this.root.right;
						this.parentNodes[2]=this.root.left.left;
					}
					else if(!this.root.right.left){
						this.parentNodes=[];
						this.parentNodes[0]=this.root.right;
						this.parentNodes[1]=this.root.left.left;
						this.parentNodes[2]=this.root.left.right;
					}
					else if(!this.root.right.right){
						this.parentNodes=[];
						this.parentNodes[0]=this.root.right;
						this.parentNodes[1]=this.root.left.left;
						this.parentNodes[2]=this.root.left.right;
						this.parentNodes[3]=this.root.right.left;
					}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;