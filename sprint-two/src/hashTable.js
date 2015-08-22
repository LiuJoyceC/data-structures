var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  this.count++;
  if (this.count > 0.75 * this._limit) {
    this._limit *= 2;
    this.rehash(this._limit);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
      this.count--;
      if (this._limit > 8 && this.count < 0.25 * this._limit) {
        this._limit /= 2;
        this.rehash(this._limit);
      }
      return;
      // Note: changed Mocha test to say that
      // the removed value should become undefined
      // rather than null, since we want to delete
      // the key-value pair from the hash table
      // not just replace the value with a null object
    }
  }
};

HashTable.prototype.rehash = function(newLimit) {
  var store = [];
  this._storage.each(function(bucket) {
    store = store.concat(bucket || []);
  });
  this._storage = LimitedArray(newLimit);
  for (var i = 0; i < store.length; i++) {
    this.count--;
    this.insert.apply(this, store[i]);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
    insert: If our underlying storage array resizes in order to keep a consistent
      average number of entries per bucket, then this operation is Constant time.
      But if we don't resize, then the size of the buckets will increase linearly
      with the number of entries in our hash table, so this method will be linear,
      since we need to iterate over the bucket to see if k already exists.
    retrieve: again, it is constant time if the storage array resizes to keep the
      bucket sizes approximately constant, but it is linear if we don't resize,
      because it must iterate over the bucket to find and return the value at k
    remove: again, constant if storage resizes, and linear if it doesn't, because
      we must iterate through the bucket to find the item, and then iterate through
      the rest of the bucket to move the indices down one (with our splice operation)
    rehash: Linear, because we must iterate over every item to extract all key-value
      pairs, and then iterate over every key-value pair to insert it back into the
      new storage array. This is why rehashing is an expensive operation.
 */
