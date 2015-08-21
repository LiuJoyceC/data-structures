


// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
  this.arbitraryIndex = 0;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  if (!this.contains(node)) {
    this.nodes[this.arbitraryIndex] = GraphNode(node);
    this.arbitraryIndex++;
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for (var i in this.nodes) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  for (var i in this.nodes) {
    if (this.nodes[i].value === node) {
      for (var j in this.nodes[i].edges) {
        var edgeInd = this.search(node, this.nodes[i].edges[j].edges);
        delete this.nodes[i].edges[j].edges[edgeInd];
      }
      delete this.nodes[i];
      return;
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var graphInd = this.search(fromNode, this.nodes);
  for (var edgeInd in this.nodes[graphInd].edges) {
    if (this.nodes[graphInd].edges[edgeInd].value === toNode) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var fromInd = this.search(fromNode, this.nodes);
  var toInd = this.search(toNode, this.nodes);
  this.nodes[fromInd].edges[this.nodes[fromInd].edgeInd] = this.nodes[toInd];
  this.nodes[toInd].edges[this.nodes[toInd].edgeInd] = this.nodes[fromInd];
  this.nodes[fromInd].edgeInd++;
  this.nodes[toInd].edgeInd++;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromInd = this.search(fromNode, this.nodes);
  var toEdgeInd = this.search(toNode, this.nodes[fromInd].edges);
  var fromEdgeInd = this.search(fromNode, this.nodes[fromInd].edges[toEdgeInd].edges);
  delete this.nodes[fromInd].edges[toEdgeInd].edges[fromEdgeInd];
  delete this.nodes[fromInd].edges[toEdgeInd];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var i in this.nodes) {
    cb(this.nodes[i].value);
  }
};

// callback takes in node, and index
Graph.prototype.search = function(value, obj) {
  for (var i in obj) {
    if (obj[i].value === value) {
      return i;
    }
  }
};

var GraphNode = function(value) {
  var node = {};
  node.value = value;
  node.edges = {};
  node.edgeInd = 0; // also arbitrary index
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addNode: Linear, because must first search to see if a node with the same value already
     exists (values must be unique because many of the other functions assume they are)
   contains: Linear, must search through nodes to find whether the graph contains that value
   removeNode: If we assume the average number of edges per node does not increase as
     we add more nodes to the graph, then it is linear. But if adding more nodes means each
     node has more edges (like in the case of the graph where all nodes are connected to
     all other nodes) then it will be polynomial.
  hasEdge: Linear, because we search through the nodes for the one we want to look at
  addEdge: Linear, because we search through the nodes twice (2n, which is still linear) to
    find the two nodes we want to connect
  removeEdge: Linear, because we search through all nodes to find the fromNode
  forEachNode: Linear, because perform one action on each node (unless callback function
    itself is linear or polynomial);
  search: Linear, because going through each node to find the target
 */



