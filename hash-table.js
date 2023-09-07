const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    // Your code here
    let hexNum = sha256(key);
    let shortHex = hexNum.slice(0, 8);
    // console.log(shortHex);
    let answer = parseInt(shortHex, 16);
    return answer
  }

  hashMod(key) {
    // Your code here
    let hash = this.hash(key);
    let answer = hash % this.capacity;
    return answer;
  }

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
