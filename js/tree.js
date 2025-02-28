// JS里面的树

class TreeNode {
    constructor(value) {
      this.value = value; // 节点的值
      this.left = null;   // 左子节点
      this.right = null;  // 右子节点
    }
}

class BinaryTree {
    constructor() {
      this.root = null; // 根节点
    }
  
    // 插入节点
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode; // 如果树为空，新节点为根节点
      } else {
        this._insertNode(this.root, newNode); // 递归插入
      }
    }
  
    // 递归插入节点
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode; // 插入左子节点
        } else {
          this._insertNode(node.left, newNode); // 递归左子树
        }
      } else {
        if (node.right === null) {
          node.right = newNode; // 插入右子节点
        } else {
          this._insertNode(node.right, newNode); // 递归右子树
        }
      }
    }
  
    // 中序遍历（左 -> 根 -> 右）
    inOrderTraversal(node = this.root, result = []) {
      if (node !== null) {
        this.inOrderTraversal(node.left, result); // 遍历左子树
        result.push(node.value); // 访问根节点
        this.inOrderTraversal(node.right, result); // 遍历右子树
      }
      return result;
    }
  
    // 先序遍历（根 -> 左 -> 右）
    preOrderTraversal(node = this.root, result = []) {
      if (node !== null) {
        result.push(node.value); // 访问根节点
        this.preOrderTraversal(node.left, result); // 遍历左子树
        this.preOrderTraversal(node.right, result); // 遍历右子树
      }
      return result;
    }
  
    // 后序遍历（左 -> 右 -> 根）
    postOrderTraversal(node = this.root, result = []) {
      if (node !== null) {
        this.postOrderTraversal(node.left, result); // 遍历左子树
        this.postOrderTraversal(node.right, result); // 遍历右子树
        result.push(node.value); // 访问根节点
      }
      return result;
    }
}

const tree = new BinaryTree();
tree.insert(10); // 根节点
tree.insert(5);  // 左子节点
tree.insert(15); // 右子节点
tree.insert(3);  // 5 的左子节点
tree.insert(7);  // 5 的右子节点
tree.insert(12); // 15 的左子节点
// tree.insert(null); // 15 的右子节点

/*
      10
     /  \
    5    15
   / \   / \
  3   7 12 
*/
console.log(tree.inOrderTraversal());