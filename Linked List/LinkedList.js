/*
  Javascript Linked List implementation
*/

class LinkedList {
  constructor(val) {
    this.head = null
    this.length = 0
    this.add(val)  
  }

  add(val) {
    let newNode = { val }
    newNode.next = this.head
    this.head = newNode
    length++
    return this
  }
}

// Instantiate a new LinkedList using the constructor from above
const myList = new LinkedList(0) // LinkedList { head: { val: 0, next: null }, length: 1 }

// Use the add() method to append another element to our linked list
myList.add(1) // LinkedList { head: { val: 1, next: { val: 0, next: null } }, length: 2 }
myList.add(2) // LinkedList { head: { val: 2, next: { val: 1, next: { val: 0, next: null } } }, length: 3 }
