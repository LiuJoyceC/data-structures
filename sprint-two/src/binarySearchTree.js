var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

// This is just for our learning purpose, we wanted to try
// writing contains both with and without recursion
BinarySearchTree.prototype.containsWithoutRecursion = function(value) {
  var found = false;
  var topNode = this;
  while (!found && topNode) {
    if (topNode.value === value) {
      found = true;
    } else if (value < topNode.value) {
      topNode = topNode.left;
    } else {
      topNode = topNode.right;
    }
  }
  return found;
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  var nextNode = (value < this.value) ? this.left : this.right;
  return !!nextNode && nextNode.contains(value);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
   insert and contains: logarithmic. Because the tree has an order, we are able to
   discard half of the nodes at each level.
   depthFirstLog: linear because we perform callback on every node
 */
