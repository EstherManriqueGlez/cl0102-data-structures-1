"use strict";

class Stack {
  constructor() {
    this.array = [];
  }

  // adds a provided element at the tail of the stack
  push(elem) {
    this.array.push(elem);
  }

  // retrieves and remove from the tail
  pop() {
    if (!this.isEmpty()) {
      return this.array.pop();
    }
  }

  // returns the value at the tail without removing it
  peek() {
    if(!this.isEmpty()) {
      let lastIndex = this.length() - 1;
      return this.array[lastIndex];
    }
  }

  // returns the number of elements in the stack
  length() {
    return this.array.length;
  }

  // returns true if the stack is empty, false otherwise
  isEmpty() {
    return this.length() === 0;
  }

  // returns the index of the provided value if present, -1 otherwise
  search(elem) {
    if(!this.isEmpty()) {
      return this.array.indexOf(elem);
    }
  }
};

module.exports.Stack = Stack; 