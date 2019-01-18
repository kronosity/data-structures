//avl is same as bst, but migitigate the worst of it by keeping data in balance.
//if a bst becomes out of balance it becomes hard to look up
//on subtrees you change the root with single or double rotation.

class Tree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if(!this.root) {
            this.root = new Node(value);
        }
        else {
            this.root.add(value);
        }
    }
    toJSON() {
        return JSON.stringify(this.root.serialize(), null, 4);
    }

    toObject(){
        return this.root;
    }
}

class Node {
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = 1;
    }
    add(value) {
        if(value < this.value){
            if(this.left) {
          this.left.add(value);  
        }
        else {
          this.left = new Node(value); 
        }
        if(!this.right || this.right.height < this.left.height) {
           this.height = this.left.height + 1;
        }
     } 
     else {
        if(this.right) {
            this.right.add(value);
        }
        else {
            this.right = new Node(value);
        }
        if(!this.left || this.right.height > this.left.height) {
            this.height = this.right.height + 1;
        }
     }
     this.balance();
  }
  balance() {
      const rightHeight = (this.right) ? this.rightHeight : 0;
      const leftHeight = (this.left) ? this.leftHeight : 0;

      if(leftHeight > rightHeight + 1) {
          const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
          const lefLeftHeight = (this.left.left) ? this.left.left.height : 0;
          if(leftRightHeight > lefLeftHeight) {
            this.left.rotateRR();
          }
            this.rotateLL();
      }
        else if (rightHeight > leftHeight + 1) {
            const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
            const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;
            if(rightLeftHeight > rightRightHeight) {
                this.right.rotateLL();
            }
            this.rotateRR();
        }
    }
    rotateRR() {
        const valueBefore = this.value;
        const leftBefore = this.left;
        this.value = this.right.value;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    rotateLL() {
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
    updateInNewLocation() {
        if(!this.right && !this.left) {
            this.height = 1;
        }
        else if(!this.right || (this.left && this.right.height < this.left.height)) {
            this.height = this.left.height + 1;
        } 
        else {
            this.height = this.right.height + 1;
        }
    }
    serialize() {
        const answer = {value: this.value};
        answer.left = this.left === null ? null : this.left.serialize();
        answer.right = this.right === null ? null : this.right.serialize();
        answer.height = this.height;
        return answer;
    }

}