// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = this.head
//         this.length = 1
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//         return this
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // LinkedList {
  //   head: { value: 10, next: { value: 2, next: { value: 3, next: null } } },
  //   tail: { value: 3, next: null },
  //   length: 3
  // }

  append(value) {
    // let newNode = new Node(value)
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    // console.log(this.tail.next)
    // console.log(this.tail)
    // console.log(this.head)
    // console.log("\n\n")
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepand(value) {
    // let newNode = new Node(value)
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if(index >= this.length){
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null
    }

    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++
    return this.printList()
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++
    }
    return currentNode
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepand(11);
console.log(myLinkedList.printList());

// LinkedList {
//   head: { value: 10, next: null },
//   tail: { value: 10, next: null },
//   length: 1
// }

// LinkedList {
//   head: { value: 10, next: { value: 2, next: null } },
//   tail: { value: 2, next: null },
//   length: 2
// }

// LinkedList {
//   head: { value: 10, next: { value: 2, next: { value: 3, next: null } } },
//   tail: { value: 3, next: null },
//   length: 3
// }
