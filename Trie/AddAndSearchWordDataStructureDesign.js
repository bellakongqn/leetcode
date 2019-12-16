/**
 * 设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。
示例:
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
 */

var WordDictionary = function() {
    this.dictionary = new Map()
  };
  
  // O(1)
  WordDictionary.prototype.addWord = function(word) {
    const length = word.length
    if (!this.dictionary.has(length)) {
      this.dictionary.set(length, new Set())
    }
    this.dictionary.get(length).add(word)
  };
  
  // O(NL)
  WordDictionary.prototype.search = function(pattern) {
    const length = pattern.length
    if (!this.dictionary.has(length)) return false
  
    const words = this.dictionary.get(length)
    for (const word of words) { // 线性遍历
      if (canBeSame(word, pattern)) return true
    }
    return false
  };
  
  // O(L)
  function canBeSame (word, pattern) {
    for (let i = 0; i < word.length; ++i) {
      if (pattern[i] !== '.' && pattern[i] !== word[i]) {
        return false
      }
    }
    return true
  }