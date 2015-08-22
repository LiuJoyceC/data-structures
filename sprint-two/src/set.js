var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage[item] = true;
  }

  // Note: even though we can accomplish the same result
  // without the if statement,
  // it is not the way a set works, and it would be 'cheating'
  // with the hash feature of Javascript objects, causing
  // it to be constant time.
  // therefore, we included the loop to search for the item
  // first to make sure we don't 'override' it in a true set.
};

setPrototype.contains = function(item){
  for (var str in this._storage) {
    if (str === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for (var str in this._storage) {
    if (str === item) {
      delete this._storage[str];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   Add: Linear, because we look through each item to see if it exists.
   Contains: Linear, because we look through each item to see if it exists.
   Remove: Linear, because we search through each item to see which one to delete.
 */
