var Stack = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {}; // What is this for?

  // Implement the methods below
  someInstance.push = function(value){
    someInstance[count] = value;
    count++;
  };

  someInstance.pop = function(){
    if (count) {
      count--;
    }
    var popped = someInstance[count];
    delete someInstance[count];
    return popped;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
