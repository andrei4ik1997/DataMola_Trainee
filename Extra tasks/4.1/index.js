class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

class List {
  constructor() {
    this.root = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }

  addNode(value, i = -1) {
    if (typeof value !== "number" || typeof i !== "number") {
      return false;
    }

    const node = new Node(value);

    if (i === -1) {
      return this.#append(node);
    } else {
      return this.#insertAfter(i, value);
    }
  }

  #append(node) {
    let currentNode = this.root;

    if (!currentNode) {
      this.root = node;
      this.length++;
      return true;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    this.length++;

    return true;
  }

  #insertAfter(index, value) {
    const found = this.#find(index);
    console.log(found);
    if (!found) {
      return false;
    } else {
      found.next = new Node(value, found.next);
      this.length++;
      return true;
    }
  }

  #find(index) {
    let currentNode = this.root;
    let count = 0;

    if (index >= this.length) {
      return false;
    }

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  removeNode(i = -1) {
    if (!this.root) {
      return "List empty";
    }

    if (!this.root.next) {
      return false;
    }

    if (i === -1) {
      let temp = this.root;
      let previous;
      let index = 0;

      while (index < this.length - 1) {
        previous = temp;
        temp = temp.next;
        index++;
      }
      previous.next = temp.next;
      this.length--;

      return true;
    }
    if (i >= 0 && i < this.length) {
      let temp = this.root;
      let previous;
      let index = 0;
      if (i === 0) {
        this.root = this.root.next;
        return true;
      } else {
        while (index < i) {
          previous = temp;
          temp = temp.next;
          index++;
        }
        previous.next = temp.next;
        this.length--;
        return true;
      }
    } else {
      return false;
    }
  }

  print() {
    let temp = this.root;

    if (!temp) {
      return "List empty";
    }

    let result = "";
    while (temp) {
      result += temp.value + ", ";
      temp = temp.next;
    }

    return result.slice(0, -2);
  }
}

const list = new List();
