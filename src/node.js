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
		var fP=this.parent;
		var sP=this.parent.parent;
		
			if(sP){		
				if(sP.right){
					if(sP.right.left){
						if(sP.left.left==this){
							sP.right.appendChild(fP);
							sP.left=null;
							sP.appendChild(this);
							fP.left=null;
							fP=sP;
							fP.right.right.parent=this;
							this.appendChild(fP.right.right);
							fP.right.right=null;
						}
						else if(sP.right.left === this&&sP.right.right){
							this.parent.parent.right=null;
							this.parent.parent.left.left.appendChild(this.parent);							
							this.parent.left=null;
							this.parent.parent.parent.parent.appendChild(this);
							this.parent.left.left.left.parent=null;
							this.appendChild(this.parent.left.left.left);
							this.parent.left.left.left=null;
							this.left.right.parent=null;
							this.appendChild(this.left.right);
							this.left.right=null;
						}
						else{
							sP.left.appendChild(fP);
							sP.right=null;
							sP.appendChild(this);
							fP.left=null;
							fP=sP;
							fP.left.right.parent=this;
							this.appendChild(fP.left.right);
							fP.left.right=null;
						}				
					}
					else{
						sP.right.appendChild(this);
						sP.left.left=null;
						this.appendChild(sP.left);
						sP.left=null;
						sP.appendChild(this);
						this.parent.right.left=null;
					}
				}
				else{
					this.parent.parent.appendChild(this);
					this.appendChild(this.parent.left);
				}
			}					
												
			else if(fP.right === this&&fP.right.right&&!fP.left.left.left){				
					fP.right=null;					
					fP.left.left.appendChild(this);					
					this.parent.parent.parent.left=null;
					this.left.appendChild(this.parent.parent.parent);					
					this.right.parent=null;
					this.left.appendChild(this.right);
					this.right=null;					
					this.left.parent=null;
					this.appendChild(this.left);
					this.left=null;					
					this.appendChild(this.parent.parent);
					this.parent=null;
					this.left.left.left=null;				
					this.right.parent=null;
					this.left.left.appendChild(this.right);
					this.right=null;					
					this.left.left.left.left.parent=null;					
					this.appendChild(this.left.left.left.left);
					this.left.left.left.left=null;					
					this.left.left.left.parent=null;
					this.right.appendChild(this.left.left.left);
					this.left.left.left=null;					
					this.right.left.right.parent=null;
					this.right.appendChild(this.right.left.right);	
					this.right.left.right=null;
			}
			
			else if(this.left){
					fP.right.parent=null;
					this.appendChild(fP.right);
					fP.right=null;
					this.left.parent=null;
					fP.appendChild(this.left);
					this.left=null;
					fP.left=null;
					this.appendChild(fP);
					this.parent=null;
					this.left.right.parent=null;
					this.left.appendChild(this.left.right);
					this.left.right=null;
			}
			
			else if(this.parent.left&&this.parent.right){				
					this.parent.left.parent=null;
					this.appendChild(this.parent.left);
					this.parent.left=null;
					this.parent.right=null;
					this.appendChild(this.parent);
					this.parent=null;					
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