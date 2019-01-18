//http://bigocheatsheet.com/

class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }    
    
    pop() {
        const answer = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return answer;
    }

    get(index){
        return this.data[index];
    }

    //delete is an expensive data stucture operation in an ArrayList. 
    delete(index){
        const answer = this.data[index];
        this._helper(index);
        return answer;
    }

    _helper(index) {
       for(let i = index; i < this.length; i++) {
           this.data[i] = this.data[i +1];
       }     
       delete this.data[this.length-1];
       this.length--;
    }

}

