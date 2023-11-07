/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let val of vals) this.push(val);
  }

  /** getNode(idx): returns node at index. */
  getNode(idx) {


    let currIdx = 0;
    let currNode = this.head;

    while (currIdx != idx) {
      currNode = currNode.next;
      currIdx += 1;
    }

    return currNode;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
      this.tail.prev = this.head;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
      this.tail.prev = this.head;
    }

    this.length += 1;


  }

  /** pop(): return & remove last item. */

  pop() {

    let oldTail = this.tail

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else if (this.length == 2) {
      this.tail = this.head;
      this.tail.prev = this.head;
    } else {
      this.tail = this.tail.prev
    }

    this.length -= 1;
    return oldTail.val;

  }

  /** shift(): return & remove first item. */

  shift() {
    let oldHead = this.head

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else if (this.length == 2) {
      this.head = this.tail;
      this.head.next = this.tail;
    } else {
      this.head = this.head.next
    }

    this.length -= 1;
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if ((idx < 0) || (idx > (this.length - 1))) {
      throw new Error(`Index of "${idx}" is not valid`)
    }

    let val = this.getNode(idx).val;
    return val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if ((idx < 0) || (idx > (this.length - 1))) {
      throw new Error(`Index of "${idx}" is not valid`)
    }

    let node = this.getNode(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx == 0) {
      this.unshift(val)
    } else if (idx >= (this.length - 1)) {
      this.push(val)
    } else {

      let newNode = new Node(val);
      let insertBefore = this.getNode(idx);
      let insertAfter = this.getNode(idx - 1);



      insertAfter.next = newNode;
      newNode.prev = insertAfter;
      insertBefore.prev = newNode;
      newNode.next = insertBefore;



      this.length += 1;

    }




  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx == 0) {
      this.shift()
    } else if (idx == (this.length - 1)) {
      this.pop()
    } else {
      let removeMe = this.getNode(idx)
      removeMe.next.prev = removeMe.prev;
      removeMe.prev.next = removeMe.next;

      this.length -= 1;
    }

  }

  /** average(): return an average of all values in the list */

  average() {

    if (this.length == 0) {
      return 0
    }

    let total = 0;

    let currNode = this.head;
    while (currNode) {
      total += currNode.val;
      currNode = currNode.next;
    }

    return total / this.length
  }
}



module.exports = LinkedList;
