/**
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：
 * 1.每次转换只能改变一个字母。
 * 2.转换过程中的中间单词必须是字典中的单词。
    * 输入:
    beginWord = "hit",
    endWord = "cog",
    wordList = ["hot","dot","dog","lot","log","cog"]
    输出: 5
    输入:
    beginWord = "hit"
    endWord = "cog"
    wordList = ["hot","dot","dog","lot","log"]
    输出: 0
    求出wordList中的所有单词的所有邻接单词形式，将具有相同邻接单词形式的单词放在一个集合里，形如 hash[邻接单词形式] = [单词1,单词2,...,单词n]
    当我们在寻找下一个邻接单词是谁时，我们通过求当前单词的邻接单词的形式，去枚举上一步的所有邻接单词形式的集合
    存在则在邻接单词形式对应的单词集合里，遍历寻找符合的目标单词
    找到，则返回
    没找到，当前寻址步数++，继续寻址
    我们将从起点 beginWord --> endWord 的寻址路线，抽象为队列
    初始值是起点，入队
    出队，通过邻接单词形式变换寻址，逻辑如上
    核心逻辑在第一步
    解题技巧
    每个邻接单词形式对应的单词既有可能相同，会出现循环寻址即环的形式
    例如 h*t -> hot、*ot -> hot
    因此维护一个访问记录数组，访问比较过的单词，下次不再访问
 */

var ladderLength = function(beginWord, endWord, wordList) {
    if(!endWord&&wordList.indexOf(endWord)===-1){
        return 0 ;
    }
    // 单词通用状态
    var comboDicts = {}
    var len =  beginWord.length
     for(var i = 0;i<wordList.length;i++){
		for(var r = 0;r<len;r++){
			var newWord = wordList[i].substring(0,r)+'*'+wordList[i].substring(r+1,len);
			(!comboDicts[newWord]) && (comboDicts[newWord] = []);
			comboDicts[newWord].push(wordList[i]);
		}
    }
    
    //  comboDicts: 
    // {*ot:[hot,dot,lot]}
    // {h*t:[hot]}
    // {ho*:[hot]}
    // {*ot:[dot,lot]}
    // {do*:[dot,dog]}
    // {*og:[dog,log,cog]}
    // {d*g:[dog]}
    // {l*t:[lot]}
    // {lo*:[lot,log]}
    // {l*g:[log]}
    // {c*g:[cog]}
    // {co*:[cog]}

    // hit:1->hot:2->[dot:3,lot:3]->dog:4->cog:5

    // Bfs    
    var queue = [[beginWord,1]]
        // queue = [[hit,1]]
    // 已访问  {hit:true}
    var visited ={beginWord:true}
    // queue = [[hot,2]]
    while(queue.length > 0){
        var currNode = queue.shift(); 
        var currWord = currNode[0];
        // hit
        // hot
        var currLevel = currNode[1];
        // 1
        // 2
		for(var i = 0;i < len;i++){
            // 通用状态
            var newWord = currWord.substring(0,i)+'*'+currWord.substring(i+1,len);
            // newWord = *it
            // newWord = h*t

            // *ot
            if(newWord in comboDicts){
                var tmpWords = comboDicts[newWord];
                // tmpWords = [hot]

                // [hot,dot,lot]
                for(var z = 0;z<tmpWords.length;z++){
                    if(tmpWords[z] == endWord){
                        return currLevel + 1;
                    }
                    if(!visited[tmpWords[z]]){
                        visited[tmpWords[z]] = true;
                        // visites {hit:true,hot:true}
                                                     dot:true
                        queue.push([tmpWords[z],currLevel+1]);
                        // queue: [hot,2]
                        // queue :[dot,3]
                    }
                }
            }
		}
	}
    return 0;
};


// 双向bfs并不是从两端同时bfs, 实际上是这次从begin进行bfs, 下次从end进行bfs, 像这样循环操作
var ladderLength = function(beginWord, endWord, wordList) {
    if(!endWord || wordList.indexOf(endWord) == -1){
        return 0;
    }
	// 各个通用状态对应所有单词
	var comboDicts = {};
	var len = beginWord.length;
    for(var i = 0;i<wordList.length;i++){
		for(var r = 0;r<len;r++){
			var newWord = wordList[i].substring(0,r)+'*'+wordList[i].substring(r+1,len);
			(!comboDicts[newWord]) && (comboDicts[newWord] = []);
			comboDicts[newWord].push(wordList[i]);
		}
	}
    //        visirWord([[hit,1]],{hit:1},{cog:1})
    //        visirWord([[cog,1]],{cog:1},{hit:1})     
    function visitWord(currQueue,currVisited,othersVisited){
        var currNode = currQueue.shift();
		var currWord = currNode[0];
		var currLevel = currNode[1];
		for(var i = 0;i < len;i++){
            // 通用状态
			var newWord = currWord.substring(0,i)+'*'+currWord.substring(i+1,len);
            if(newWord in comboDicts){
                var tmpWords = comboDicts[newWord];
                for(var z = 0;z<tmpWords.length;z++){
                    if(othersVisited[tmpWords[z]] != undefined){
                        return currLevel + othersVisited[tmpWords[z]];
                    }
                    if(currVisited[tmpWords[z]] == undefined){
                        currVisited[tmpWords[z]] = currLevel + 1;
                        currQueue.push([tmpWords[z],currLevel+1]);
                    }
                }
            }
		}
        return -1;
    }
    
	// Queue for BFS from beginWord
	var queueBegin = [[beginWord,1]];
    // Queue for BFS from endWord
    var queueEnd  = [[endWord,1]];
	// visited begin and end
	var visitedBegin = {};
    visitedBegin[beginWord] = 1;
	var visitedEnd = {};
    visitedEnd[endWord] = 1;
	while(queueBegin.length > 0 && queueEnd.length > 0){
        // fromBegin
        var ans = visitWord(queueBegin,visitedBegin,visitedEnd);
        //         visirWord([[hit,1]],{hit:1},{cog:1})
        if(ans > -1){
            return ans;
        }
        // formEnd
        ans = visitWord(queueEnd,visitedEnd,visitedBegin);
        if(ans > -1){
            return ans;
        }
	}
	return 0;
};


var ladderLength = function(beginWord, endWord, wordList) {
    if(!endWord || wordList.indexOf(endWord) == -1){
        return 0;
    }
    var wordListHash = {};
    for(var i = 0;i<wordList.length;i++){
        wordListHash[wordList[i]] = true;
    }
    var genes = 'abcdefghigklmnopqrstuvwxyz';
    var level = 0;
    var queue = [[beginWord,1]];
    while(queue.length != 0){
        var curr = queue.pop();
        level = curr[1]
        if(curr[0] == endWord){
            return level;
        }
        var arrCurr = curr[0];
        // hit
        for(var i = 0;i<arrCurr.length;i++){
            for(var r = 0;r<genes.length;r++){
                if(genes[r] != arrCurr[i]){
                    //  strCurr = 'ait' 
                    var strCurr = (arrCurr.slice(0,i))+genes[r]+(arrCurr.slice(i+1));
                    if(wordListHash[strCurr]){
                        queue.unshift([strCurr,level+1]);
                        wordListHash[strCurr] = false;
                    }
                }
            }
        }
    }
	return 0;
};



let ladderLength = function(beginWord, endWord, wordList) {
    let wordListSet = new Set(wordList);
    if(!wordListSet.has(endWord)){
        return 0;
    }
    let beginSet = new Set();
    beginSet.add(beginWord);
    let endSet = new Set();
    endSet.add(endWord)
    let level = 1;
    // BFS
    while (beginSet.size > 0) {
        let next_beginSet = new Set();
        for(let key of beginSet){
            for(let i = 0;i < key.length;i++){
                for(let j = 0;j < 26;j++){
                   let s =  String.fromCharCode(97+j);
                   if(s != key[i]){
                        let new_word = key.slice(0,i)+s+key.slice(i+1);
                        if(endSet.has(new_word)){
                            return level + 1;
                        }
                        if(wordListSet.has(new_word)){
                            next_beginSet.add(new_word);
                            wordListSet.delete(new_word);
                        }
                   }
                }
            }
        }
        beginSet = next_beginSet;
        level++;
        if(beginSet.size > endSet.size){
            [beginSet,endSet] = [endSet,beginSet]
        }
    }
    return 0;
}