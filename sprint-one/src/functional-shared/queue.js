var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstanceOf = {};
  someInstanceOf.count = 0;
  _.extend(someInstanceOf, queueMethods);
  return someInstanceOf;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count) {
    this.count--;
  }
  var next = this[0];
  for (var i = 0; i < this.count; i++) {
    this[i] = this[i + 1];
  }
  delete this[this.count];
  return next;
};

queueMethods.size = function() {
  return this.count;
};
