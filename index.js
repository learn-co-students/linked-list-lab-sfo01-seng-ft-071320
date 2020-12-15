// should return the name of the node passed through
function getName(name) {
	return Object.values(name);
	// return node.names
}

// should return head node of the linked list
function headNode(linkedList, collection) {
	let head = collection[linkedList];
	return head;
}

// should return the following node every time it is called
//returns the correct node when called multiple times

function next(head, collection) {
	let nextAddress = head.next;
	return collection[nextAddress];
}

//should return the node at the provided index

function nodeAt(index, linkedList, collection) {
	let node = collection[linkedList];
	for (let i = 0; i < index; i++) {
		node = next(node, collection);
	}
	return node;
}

//should return the address of the node at the address
function addressAt(index, linkedList, collection) {
	return index === 0 ? linkedList : nodeAt(index - 1, linkedList, collection).next;
}
// should return the index of the provided node
function indexAt(node, collection, linkedList) {
	let currentNode = collection[linkedList];
	let count = 0;

	while (node !== currentNode) {
		count++;
		currentNode = next(currentNode, collection);
	}
	return count;
}

// should set the next property of the inserted node
// should set the next property of the node previous to the inserted node
// should insert the node at the provided index, while maintaining order of all the other nodes

function insertNodeAt(index, newNode, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection);
    let nextNodeAddress = addressAt(index, linkedList, collection);
  
    previousNode.next = newNode;
    collection[newNode].next = nextNodeAddress;
  }

//should set the next property of the node previous to the deleted node
//should delete the node at the provided index, while maintaining order of all the other nodes

function deleteNodeAt(index, linkedList, collection) {
	let previousNode = nodeAt(index - 1, linkedList, collection);
	let nextNodeAddress = addressAt(index + 1, linkedList, collection);

	previousNode.next = nextNodeAddress;
}
