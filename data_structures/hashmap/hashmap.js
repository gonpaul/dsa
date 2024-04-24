/*
Easy implementation to get the grasp of it.
A part of the ztm Master The Coding Interview course
Check code here: https://repl.it/@aneagoie/DataStructures-Hash-Table-exercise
---
What is the difference between a hash map and table?
In some programming languages and libraries, a hash map may provide additional features
 such as the ability to iterate over key-value pairs in insertion order 
 or maintain key-value pairs in a predictable order.
Hash maps are generally considered to be more flexible and may offer more features compared to hash tables.
a hash map or a hash table may depend on the specific requirements of the application 
 and the features provided by the programming language or library being used
**/
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // like in java underscore means that it is a private property, though it's meaningless,
  // because you technically can access it. To make it indeed private
  // While JavaScript does not enforce true privacy for methods, this naming convention
  // serves as a signal to other developers that the method is intended for internal use within the class.
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; ++i) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(key.length) => assuming that the length won't be even close to Infinity then O(1)

  /* 
  Set a property where each value can be accessed by its key

  @param {*} key
  @param {*} value
  **/
  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = []; // to address the collision problem
    }
    this.data[index].push([key, value])
    return this.data
  } // O(1)

  get(key) {
    const index = this._hash(key);
    const currentBucket = this.data[index];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; ++i) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } 
    return undefined;
  } // O(1) most of the time, depends on how big the table is,
  //  and how many there are elements pointing to the same bucket

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    const list = [];
    for (let i = 0; i < this.data.length; ++i) {
      // const currentBucket = this.data[i];
      if (this.data[i] && this.data[i].length) {
        for (let j = 0; j < this.data[i].length; ++j) {
          list.push(this.data[i][j][0])
        }
      }
    }
    return list;
  } // A pity thing is that the worst Time and Space complexities can reach O(N + k)
  // where N is the number allocated to a hash table, and k is the length of elements behind each address
  // A better way is to always store keys array as an attribute, but it may be an inefficient use of space
  // while its time complexity will be a perfect O(1)
}

const myHashTable = new HashTable(10);
console.log(myHashTable.set('johdn', 182));
// console.log(myHashTable._hash('12abasqqyc'))
console.log(myHashTable.set('ooowiii', 19999));
console.log(myHashTable.set('ooowiii3', 191239));
console.log(myHashTable.get('johdn'), 'index', myHashTable._hash('johdn'))
console.log(myHashTable.keys());
