

function BST(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

// Method for inserting a value into an existing BST.
// Checks the value of "value" and inserts the data into the proper node.
BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

// Method that checks if a value exists within the BST.
BST.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

// Recursive function that checks the "left" nodes all the way down the tree to return the node w/ the minimum value.
BST.prototype.getMin = function () {
  if (!this.left) {
    return this.value;
  } else {
    return this.left.getMin();
  }
}

// Recursive function that checks the "right" nodes all the way down the tree to return the node w/ the maximum value.
BST.prototype.getMax = function () {
  if (!this.right) {
    return this.value;
  } else {
    return this.right.getMax();
  }
}