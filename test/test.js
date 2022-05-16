const { Stack } = require('../classes/stack');
const { Queue } = require('../classes/queue');
const assert = require('assert')

describe('Stack', function () {
  let stack = new Stack();
  describe('#push()', function () {
    it.only('Should push 10, 20, and 30 without error', function () {
      stack.push(10);
      stack.push(20);
      stack.push(30);
    });
  });
  
  describe('#search()', function () {
    it.only('Should return 1 which is the index of 20', function () {
      assert.equal(stack.search(20), 1);
    });
    it.only('Should return -1 because 50 does not exist', function () {
      assert.equal(stack.search(50), -1);
    });
  });

  describe('#peek()', function () {
    it.only('Should return 30', function () {
      assert.equal(stack.peek(), 30);
    });
  });

  describe('#pop()', function () {
    it.only('Should return 30', function () {
      assert.equal(stack.pop(), 30);
    });
  });

  describe('#length()', function () {
    it.only('Should return 2', function () {
      assert.equal(stack.length(), 2);
    });
  });

  describe('#isEmpty()', function () {
    it.only('Should return false', function () {
      assert.equal(stack.isEmpty(), false);
    });
  });
});

// ****************

describe('Queue', function () {
  let queue = new Queue();
  describe('#offer()', function () {
    it.only('Should push 10, 20, and 30 without error', function () {
      queue.offer(10);
      queue.offer(20);
      queue.offer(30);
    });
  });
  
  describe('#search()', function () {
    it.only('Should return 1 which is the index of 20', function () {
      assert.equal(queue.search(20), 1);
    });
    it.only('Should return -1 because 50 does not exist', function () {
      assert.equal(queue.search(50), -1);
    });
  });

  describe('#peek()', function () {
    it.only('Should return 10', function () {
      assert.equal(queue.peek(), 10);
    });
  });

  describe('#poll()', function () {
    it.only('Should return 10', function () {
      assert.equal(queue.poll(), 10);
    });
  });

  describe('#length()', function () {
    it.only('Should return 2', function () {
      assert.equal(queue.length(), 2);
    });
  });

  describe('#isEmpty()', function () {
    it.only('Should return false', function () {
      assert.equal(queue.isEmpty(), false);
    });
  });
});



