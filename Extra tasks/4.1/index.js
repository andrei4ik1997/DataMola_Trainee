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
    if (typeof value !== 'number' || typeof i !== 'number') {
      return false;
    }

    const node = new Node(value);

    if (i === -1) {
      return this.#appendNode(node);
    }
    return this.#insertNodeAfter(i, value);
  }

  #appendNode(node) {
    let currentNode = this.root;

    if (!currentNode) {
      this.root = node;
      this.length += 1;
      return true;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    this.length += 1;

    return true;
  }

  #insertNodeAfter(index, value) {
    const found = this.#findNode(index);
    if (!found) {
      return false;
    }
    found.next = new Node(value, found.next);
    this.length += 1;
    return true;
  }

  #findNode(index) {
    let currentNode = this.root;
    let count = 0;

    if (index >= this.length) {
      return false;
    }

    while (count < index) {
      currentNode = currentNode.next;
      count += 1;
    }

    return currentNode;
  }

  removeNode(i = -1) {
    if (!this.root) {
      return 'List empty';
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
        index += 1;
      }
      previous.next = temp.next;
      this.length -= 1;

      return true;
    }
    if (i >= 0 && i < this.length) {
      let temp = this.root;
      let previous;
      let index = 0;
      if (i === 0) {
        this.root = this.root.next;
        return true;
      }
      while (index < i) {
        previous = temp;
        temp = temp.next;
        index += 1;
      }
      previous.next = temp.next;
      this.length -= 1;
      return true;
    }
    return false;
  }

  print() {
    let temp = this.root;

    if (!temp) {
      return 'List empty';
    }

    let result = '';
    while (temp) {
      result += `${temp.value}, `;
      temp = temp.next;
    }

    return result.slice(0, -2);
  }
}

// eslint-disable-next-line no-unused-vars
const list = new List();
