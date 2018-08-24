// Good read up on this topic:
// http://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html

class HashMap {
  constructor() {
    this.keys = []
    this.values = []

    this.get = (lookupKey) => {
      for (var i = 0; i < this.keys.length; i++) {
        var key = this.keys[i];
        if (key === lookupKey) {
          return this.values[i]
        }
      }
    }

    this.set = (key, val) => {
      this.keys.push(this.hashFunction(key))
      this.values.push(val)
    }
    
    // The hash function you choose determines how collisions are handled, and how performant the hash map will be.
    // I found this hash function from the blog linked above.
    this.hashFunction = (key) => {
      var hash = 0;
      if (key.length == 0) {
        return hash;
      }

      for (var i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash;
        hash = hash + key.charCodeAt(i);
        hash = hash & hash; 
      }
      return Math.abs(hash);
    }
  }
}


const myHash = new HashMap();
myHash.set("asdjasldjalksdjaslkd", 1)

myHash //HashMap { keys: [ 1377103378 ], values: [ 1 ],get: [Function], set: [Function], hashFunction: [Function] }