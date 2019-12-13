/**
 * 实现一个带有buildDict, 以及 search方法的魔法字典。
对于buildDict方法，你将被给定一串不重复的单词来构建一个字典。
对于search方法，你将被给定一个单词，并且判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。
 */
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.dict = dict;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    const len = word.length;
    if (!len) {
        return false;
    }
    const samelen = this.dict.filter(v => v.length === len);
    return samelen.some(item => {
        let same = 0;
        for(let i = 0; i < len; i++) {
            if (item[i] !== word[i]) {
                same+=1;
            }
        }
        if (same === 1) {
            return true;
        }
        return false;
    })
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */