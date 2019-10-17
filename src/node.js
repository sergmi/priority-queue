class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=this.left=this.right=null;
	}

	appendChild(node) {
		if(!this.left){
			node.parent=this;
			this.left=node;
			
		}
		else {
			if(!this.right){
				node.parent=this;
				this.right=node;
			}
		}
	}

	removeChild(node) {
		if(this.left===node){
			this.left.parent=null;
			this.left=null;
		}
		else {
			if(this.right===node){
				this.right.parent=null;
				this.right=null;
			}
			else {
				alert('node is not a child');
			}
		}
	}

	remove() {
		if(this.parent){
			var child=this;
			this.parent.removeChild(child);
		}
	}

	swapWithParent() {
		if(this.parent){
			if(this.parent.parent&&this.parent.parent.right){				
					if(this.parent.parent.left.left===this){
						this.parent.left=null;
						this.parent.parent.right.appendChild(this);
						this.parent.appendChild(this.parent.parent.left);
						this.parent.parent.left=null;
						this.parent.left=null;
						this.parent.parent.appendChild(this);
						this.appendChild(this.parent.right.right);
						this.parent.right.right=null;			
					}

					if(this.parent.parent){
						if(this.parent.parent.right.left===this){
							this.parent.parent.left.appendChild(this.parent);
							this.parent.parent.parent.right=null;					
							this.parent.parent.parent.appendChild(this);					
							this.parent.left.right.left=null;
							this.appendChild(this.parent.left.right);
							this.parent.left.right=null;
						}
					}
			}															
			
			else if(this.parent.right&&this.left){
					this.parent.right.parent=null;
					this.appendChild(this.parent.right);
					this.parent.right=null;
					this.left.parent=null;
					this.parent.appendChild(this.left);
					this.left=null;
					this.parent.left=null;
					this.appendChild(this.parent);
					this.parent=null;
					this.left.right.parent=null;
					this.left.appendChild(this.left.right);
					this.left.right=null;
			}
			
			else if(this.parent.left===this&&this.parent.right){
					this.parent.left=null;
					this.parent.right.parent=null;
					this.appendChild(this.parent);
					this.parent=null;
					this.appendChild(this.left.right);
					this.left.right=null;		
			}

			else if(this.parent.left&&this.parent.right===this){				
			
					this.parent.right=null;
					this.parent.left.parent=null;
					this.appendChild(this.parent.left);
					this.parent.left=null;
					this.appendChild(this.parent);
					this.parent=null;
			}

			else if(this.parent.parent&&!this.parent.parent.right){				
					this.parent.parent.appendChild(this);
					this.appendChild(this.parent.left);
			}
			
			else {
				this.parent.left=null;
				this.appendChild(this.parent);
				this.parent=null;
			}
		}			
	}
}

module.exports = Node;