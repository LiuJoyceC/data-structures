// Doubly Linked List

var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }
    list.tail = newNode;
  };

  list.addToHead = function(value){
    var newNode = Node(value);
    if (!list.head) {
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;
  }

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

  list.removeTail = function(){
    var tail = list.tail;
    if (tail) {
      list.tail = tail.previous;
      if (list.head === tail) {
        list.head = null;
      }
      return tail.value;
    }
  }

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
  node.previous = null;

  return node;
};
