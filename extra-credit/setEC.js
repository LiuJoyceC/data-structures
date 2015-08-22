var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i,1);
      return;
    }
  }
};

// Note: In the set that we wrote for Sprint Two, where set only takes
// strings as items, each of these methods run in constant time.
// With this new set that can take any type of value as an item,
// these methods are now all linear time, because we must iterate
// through each item.
