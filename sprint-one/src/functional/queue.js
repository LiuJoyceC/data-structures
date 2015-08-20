var Queue = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if (count) {
      count--;
    }
    var next = someInstance[0];
    for (var i = 0; i < count; i++) {
      someInstance[i] = someInstance[i + 1];
    }
    delete someInstance[count];
    return next;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
