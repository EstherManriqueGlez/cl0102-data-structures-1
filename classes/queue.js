"use strict";

class Queue {
  constructor() {
    this.array = [];
  }

  // adds a provided element at the tail
  offer(elem) {
    this.array.push(elem);
  }

  // retrieves and remove from the head)
  poll() {
    if (!this.isEmpty()) {
      return this.array.shift();
    }
  }

  // returns the value at the head without removing it
  peek() {
    if(!this.isEmpty()) {
      return this.array[0];
    }
  }

  // returns the number of elements in the queue
  length() {
    return this.array.length;
  }

  // returns true if the queue is empty, false otherwise
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

module.exports.Queue = Queue; 