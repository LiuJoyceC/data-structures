var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var head = list.head;
    if (head) {
      list.head = head.next;
      if (list.tail === head) {
        list.tail = null;
      }
      return head.value;
    }    
  };

  list.contains = function(target){
    for (var node = list.head; node; node = node.next) {
      if (node.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  list.addToTail: Constant, because you only operate on the tail,
      regardless if we have 3 nodes or 1000000 nodes.

  list.removeHead: Constant, because you only operate on the head,
      regardless of how many nodes are in it.

  list.contains: Linear, because the function iterates through the
      chain to look for the target. If you have 3 nodes, it would
      on average need to iterate through 1.5 nodes, and if you have
      3000 nodes, you would have to on average iterate through 1500
      nodes to find the target. Each new node incrementally adds a
      constant amount of time.
 */
