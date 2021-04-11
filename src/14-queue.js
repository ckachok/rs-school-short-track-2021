const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  enqueue(element) {
    const prevLast = this.last;
    this.last = new ListNode(element);

    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      prevLast.next = this.last;
    }

    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      this.last = null;
      return null;
    }

    const itemValue = this.first.value;
    this.first = this.first.next;

    this.length--;

    return itemValue;
  }

  get size() {
    return this.length;
  }
}

module.exports = Queue;
