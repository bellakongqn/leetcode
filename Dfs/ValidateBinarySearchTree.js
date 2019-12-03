/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
   假设一个二叉搜索树具有如下特征： 
    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
    输入:    
        2
    / \
    1   3
    输出: true
    
    输入:
     5
    / \
    1   7
       / \
       3 8
    输出: false
    解释: 输入为: [5,1,4,null,null,3,6]。
         根节点的值为 5 ，但是其右子节点值为3 。
 */

//  中序遍历，左根右
var isValidBST = function(root) {
    var stack = new Array();
    var inorder = -Infinity;
    // 最小值

    while (stack.length > 0 || root != null) {
      // 当root 不为null 时，循环执行代码块
      while (root != null) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      // If next element in inorder traversal
      // is smaller than the previous one
      // that's not BST.
      if (root.val <= inorder) return false;
      inorder = root.val;
      root = root.right;
    }
    return true;
  };