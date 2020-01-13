/**
 * 993. 二叉树的堂兄弟节点
 * 在二叉树中，根节点位于深度 0 处，
 * 每个深度为 k 的节点的子节点位于深度 k+1 处。
如果二叉树的两个节点深度相同，但父节点不同，则它们是一对堂兄弟节点。
我们给出了具有唯一值的二叉树的根节点 root，以及树中两个不同节点的值 x 和 y。
只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true。否则，返回 false。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    var depth = new Map();
    var parents = new Map();

    function ifbrothers(root, parent){
    depth.set(root.val, parent == null ? 0 : depth.get(parent.val)+1)
    parents.set(root.val, parent)
    if(root.left)ifbrothers(root.left, root)
    if(root.right)ifbrothers(root.right, root)
}
    ifbrothers(root, null)
    return depth.get(x) == depth.get(y) && parents.get(x) != parents.get(y)
};