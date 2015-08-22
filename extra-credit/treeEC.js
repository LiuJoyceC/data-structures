// Extra Credit Tree

var TreeWithParents = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = TreeWithParents(value);
  this.children.push(newChild);
  newChild.parent = this;
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function(){
  for (var i = 0; i < this.parent.children; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
      break;
    }
  }
  this.parent = null;
};
