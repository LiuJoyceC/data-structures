var Queue = function() {
  var someInstanceOf = Object.create(queueMethods);
  someInstanceOf.count = 0;
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


