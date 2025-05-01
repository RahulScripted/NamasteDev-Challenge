// Implement a Stack data structure in JavaScript. A stack follows the Last-In-First-Out (LIFO) principle. Your implementation should include the following operations:

// 1. push(element): Add an element to the top of the stack and return size
// 2. pop(): Remove and return the top element
// from the stack and return size
// 3. peek(): Return the top element without removing it
// 4. isEmpty(): Check if the stack is empty
// 5. size(): Return the number of elements in the
// stack
// 6. clear(): Remove all elements from the stack






class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element)
        return this.items.length;
    }
    
    pop() {
        return this.items.pop()
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = []
    }
}