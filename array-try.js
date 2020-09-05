require('./memory');

class Array {
  constructor() {
    this.size = 0;
    this.capacity = 0;
    this.pointer = memory.allocate(this.size);
  }

  push(value) {
    this.resize(this.size + 1);
    memory.set(this.pointer + this.size, value);
    this.size++;
  }

  resize(size) {

  }
}