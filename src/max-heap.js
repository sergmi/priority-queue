const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.sizeValue=0;
		this.count=0;
		this.figure=0;
	}

	push(data, priority) {
		let item = new Node(data, priority);
		this.insertNode(item);
		this.shiftNodeUp(item);
	}

	pop() {
		this.sizeValue--;
		if(this.root){
			let value = this.detachRoot();
			return	value.data;			
		}
	}

	detachRoot() {		
					let value=this.root;
					if(this.root&&!this.root.left){
						this.root=null;
					}
					else if(!this.root.right){						
						this.parentNodes[0]=this.parentNodes[1];
						this.root=this.parentNodes[0];
						this.parentNodes[1]=null;
					}
					else if(!this.root.left.left){
						this.parentNodes[0]=this.parentNodes[1];
						this.root=this.parentNodes[0];
						this.parentNodes[1]=null;
					}
					else if(!this.root.left.right){
						this.parentNodes[0]=this.parentNodes[1];
						this.root=this.parentNodes[0];
						this.parentNodes[1]=this.parentNodes[2];						
						this.parentNodes[2]=null;						
					}
					else if(!this.root.right.left){
						this.parentNodes[0]=this.parentNodes[1];
						this.root=this.parentNodes[0];
						this.parentNodes[1]=this.parentNodes[2];						
						this.parentNodes[2]=null;						
					}
					
					else if(!this.root.right.right){
						this.parentNodes[0]=this.parentNodes[1];
						this.root=this.parentNodes[0];
						this.parentNodes[1]=this.parentNodes[2];
						this.parentNodes[2]=this.parentNodes[3];
						this.parentNodes[3]=null;
					}
					return value;
	}

	restoreRootFromLastInsertedNode(detached) {
		if(!detached.right){			
			this.shiftNodeUp(detached.left);
			this.root.left=null;
			this.shiftNodeUp(this.root);
		}
		else if(!detached.left.left){			
			this.shiftNodeUp(detached.right);
			this.root.right=null;
			this.shiftNodeUp(this.root);
		}
		else if(!detached.left.right){			
			this.shiftNodeUp(detached.left.left);
			this.root.left.left=null;
			this.shiftNodeUp(this.root);
		}
		else if(!detached.right.left){			
			this.shiftNodeUp(detached.left.right);
			this.root.left.right=null;
			this.shiftNodeUp(this.root);
		}
		else if(!detached.right.right){			
			this.shiftNodeUp(detached.right.left);
			this.root.right.left=null;
			this.shiftNodeUp(this.root);
		}
		else if(!detached.left.left.left){			
			this.shiftNodeUp(detached.right.right);
			this.root.right.right=null;
			this.shiftNodeUp(this.root);
		}
	}

	size() {
		return this.sizeValue;
	}

	isEmpty() {
		if(!this.root){return true;}
		else{return false;}
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
		this.sizeValue=0;
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
					this.sizeValue++;
	}

	shiftNodeUp(node) {
					if(node.parent){
						node.swapWithParent();
						this.shiftNodeUp(node);
					}
					this.root = node;
				
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
			if(this.root===node&&!node.right.left){
				node.left.swapWithParent();
				this.root=node.parent;
				this.shiftNodeDown(node);
			}

			else if(this.root===node&&node.right.left){
				node.right.swapWithParent();
				this.root=node.parent;
				this.shiftNodeDown(node);
			}
			
			else if(this.root.right===node&&node.left){
				node.left.swapWithParent();
				this.root=node.parent.parent;
				this.shiftNodeDown(node);
			}
			
			else if(node.left&&!node.right){
				node.left.swapWithParent();				
				this.shiftNodeDown(node);
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
					else if(!this.root.left.left.left){
						this.parentNodes=[];
						this.parentNodes[0]=this.root.left.left;
						this.parentNodes[1]=this.root.left.right;
						this.parentNodes[2]=this.root.right.left;
						this.parentNodes[3]=this.root.right.right;
					}
	}
}

module.exports = MaxHeap;