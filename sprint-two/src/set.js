var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  return item in this._storage;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

  // Note: In our first version of these methods,
  // we intentionally made all of them run in linear time
  // because we thought it would be "cheating" to
  // use the hash feature of javascript objects,
  // and wanted to make our methods consistent with
  // how we believe the set data structure works
  // However, we later read in the README instructions
  // for the hash table that we should come back
  // to our set and refactor it to run in constant time
  // by taking advantage of the hash feature

/*
 * Complexity: What is the time complexity of the above functions?
   Add, remove, and contains are all constant, because we are now using
   the hash feature of JS objects which are constant time.
 */
