/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let total = this.root.val;

    function sumHelper(node){
      for (let n of node.children){
        total += n.val;
        if (n.children.length > 0){
          sumHelper(n);
        }
      }
    }
    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = this.root.val % 2 === 0 ? 1 : 0;
    function countHelper(node){
      for (let n of node.children){
        if (n.val % 2 === 0) count ++;
        if (n.children.length > 0) {
          countHelper(n)
        }
      }
    }
    countHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;
    function countHelper(node){
      for (let n of node.children){
        if (n.val > lowerBound) count ++;
        if (n.children.length > 0){
          countHelper(n);
        }
      }
    }
    countHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
