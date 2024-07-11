const LinkedList = require("./LinkedList")

// 1. Node:
// Each item in the list is called a node.
// A node has two parts:
//    Value: The actual data the node holds.
//    Next: A reference (or link) to the next node in the list.

// 2. Head:
// The head is a special node that marks the start of the list.
// If the list is empty, the head is null (meaning it doesn't point to any node).

const list = new LinkedList()

list.append(10)
list.append(20)

list.display()

list.prepend(15)
list.prepend(25)
list.append(30)

list.display()
