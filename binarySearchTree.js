//order is made by comparison, helps flatten data structure
// Each node has 0 1 or 2 children
// basic rules left less than; or right side greater than
// duplicates, make a decision always go to left or right
// data has to be randomised -otherwise it's a 'linked list'
//practical uses for BST searching very quickly e.g autocompletes etc...
//looping BST

class Tree {
    constructor(node) {
        this.root = null;
    }
    toObject() {
        return this.root;
}
    add(value) {
        if(this.root === null) {
            //create head if doesnt exist
            this.root = new Node(value);
            return;
        }

    let pointer = this.root;
        while(true) {
            if(pointer.value > value) {
                //left
                if(pointer.left) {
                    pointer = pointer.left;
                }
                else {
                    pointer.left = new Node(value);
                    return;
                }
            } 
            else {
                //right
                if(pointer.right) {
                    pointer = pointer.right;
                }
                else {
                    pointer.right = new Node(value);
                    return;
                }
            }
        }
    }
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


