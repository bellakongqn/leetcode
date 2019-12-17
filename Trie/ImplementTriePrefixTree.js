/**
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
示例:
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
 */
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    // Trie 树
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    // 判断单词是不是在字典树中
    for(let char of word) {
        // 如果不存在，那么创建以这个为根的树
        if(!node[char]) {
            node[char] = {}
        }
        // 如果存在，那么这个单词成为下面单词的跟结点
        node = node[char]
        
    }
    node.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for(let char of word) {
        if(!node[char]) return false
        node = node[char]
    }
    // 判断是否字典树到最后
    return node.isEnd || false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root
    for(let char of prefix) {
        if(!node[char]) return false
        node = node[char]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */