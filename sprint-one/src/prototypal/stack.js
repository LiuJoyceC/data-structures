var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstanceOf = Object.create(stackMethods);
  someInstanceOf.count = 0;
  return someInstanceOf;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
  if (this.count) {
    this.count--;
  }
  var popped = this[this.count];
  delete this[this.count];
  return popped;
}

stackMethods.size = function() {
  return this.count;
}

