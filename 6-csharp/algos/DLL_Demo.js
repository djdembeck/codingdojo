class DNode{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    //given a value, place a new node with that value
    //at the end of the list, becoming the new tail
    //make sure it works when the list is empty!
    //and make sure to connects things two ways!
    push(val){
        //add first node here
        if(this.head === null){
            this.head = new DNode(val);
            this.tail = this.head;
        }
        else{
            this.tail.next = new DNode(val);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
    }

    //remove the tail from the list and return the value
    pop(){
        this.tail = this.tail.prev
        this.tail.next.prev = null
        let value = this.tail.next.val
        this.tail.next = null
        return value;
    }

    //return the value at the head
    front(){
        return this.head.val;
    }

    //return the value at the tail
    back(){
        return this.tail.val;
    }

    //return true if any node in the list matches the given
    //value. return false if the value does not appear
    contains(val){
        let runner = this.head;
        while(runner != null){
            if(runner.val === val) return true;
            runner = runner.next;
        }
        return false;
    }

    //count up how many nodes exist in the list and return
    //the count
    size(){
        let runner = this.head;
        let count = 0;
        while(runner != null){
            ++count;
            runner = runner.next;
        }
        return count;
    }

    //reverse the order of nodes in the list
    reverse(){
        let tempRunner = this.tail;
        this.tail = this.head
        this.head = tempRunner;
        let runner = this.head;
        
        while(runner != null) {
            tempRunner = runner.next;
            runner.next = runner.prev;
            runner.prev = tempRunner;
            runner = runner.next;
        }
    }

    //determine whether the list is valid, make sure next
    //and prev pointers match, returns false if not valid
    //true if valid
    isValid(){
        let runner = this.head;
        while(runner.next != null) {
            if(runner != runner.next.prev) {
                return false;
            }
            runner = runner.next;
        }
        return true;
    }

    printMe(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    reversePrint(){
        let returnStr = '';
        let runner = this.tail;
        while(runner != null){
            returnStr += `<- ${runner.val}`;
            runner = runner.prev;
        }
        console.log(returnStr);
        return returnStr;
    }
}

let myDLL = new DLL();
myDLL.push(1);
myDLL.push(2);
myDLL.push(3);
myDLL.push(4);
myDLL.printMe();
// Test reverse
myDLL.reverse();
myDLL.printMe();

// myDLL.reversePrint();
// Check isValid
// myDLL.head.next.next.prev = null;
// console.log(myDLL.isValid());//should print false

// console.log(myDLL.contains(4));
// console.log(`let's take this value out: ${myDLL.pop()}`);
// myDLL.printMe();
// console.log(myDLL.size());