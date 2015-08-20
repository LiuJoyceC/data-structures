var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count) {
    this.count--;
  }
  var popped = this[this.count];
  delete this[this.count];
  return popped;
};

Stack.prototype.size = function() {
  return this.count;
};
