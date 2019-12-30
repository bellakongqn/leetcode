/**
 * 我们从一块字母板上的位置 (0, 0) 出发，该坐标对应的字符为 board[0][0]。
在本题里，字母板为board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"].
我们可以按下面的指令规则行动：
如果方格存在，'U' 意味着将我们的位置上移一行；
如果方格存在，'D' 意味着将我们的位置下移一行；
如果方格存在，'L' 意味着将我们的位置左移一列；
如果方格存在，'R' 意味着将我们的位置右移一列；
'!' 会把在我们当前位置 (r, c) 的字符 board[r][c] 添加到答案中。
返回指令序列，用最小的行动次数让答案和目标 target 相同。你可以返回任何达成目标的路径。
示例 1：
输入：target = "leet"
输出："DDR!UURRR!!DDD!"
 */
/**
 * @param {string} target
 * @return {string}
 */
/**
 * @param {string} target
 * @return {string}
 */

let board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]
let map = {}
var alphabetBoardPath = function(target) {
    board.map((str, i)=>{
        str.split('').map((a, ii) => {
            map[a] = {i, ii}
        })
    })

    let keys = target.split('')
    let start = {i: 0, ii: 0}
    let r = []
    
    const move = ({i, ii}) => {
          while(start.i > i){
            start.i--
            r.push('U')
        }
        while(start.i < i){
            start.i++
            r.push('D')
        }
         while(start.ii > ii){
            start.ii--
            r.push('L')
        }
         while(start.ii < ii){
            start.ii++
            r.push('R')
        }
      
        
    }
    let pre 
    keys.map(b => {
        if(pre == 'z' && b!='z'){
             r.push('U')
             start.i
        }
       if(b == 'z') {
           move(map['u'])
       }else{
           move(map[b])
       }
       if(b == 'z' && pre!='z') r.push('D')
       r.push('!')
       pre = b
    })
    return r.join('')

};