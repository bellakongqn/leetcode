/**
 * 97. 交错字符串
给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。
示例 1:
输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出: true
示例 2:
输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出: false
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;
 
    const check = ( i, j, k ) => {
        if( k === s3.length){
            return true
        }
        let isValid = false
        if( i< s1.length && s1[i] === s3[k]){
            isValid =  check( i+1, j, k+1)
        }
        if (j < s2.length && s2[j] === s3[k]) {
            isValid = isValid || check(i, j + 1, k + 1); 
        }
        return isValid
    }
    return check( 0 , 0, 0)
};


var isInterleave = function(s1, s2, s3) {
    let n1= s1.length
    let n2 = s2.length
    if (n1+n2!=s3.length) return false

    let dp = Array.from(new Array(n1+1), () => new Array(n2+1))
    dp[0][0] = true
    // 初始化
    for(let i=1;i<=n1;i++) {
        dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1]
    }
    for(let i=1;i<=n2;i++) {
        dp[0][i] = dp[0][i-1] && s2[i-1] == s3[i-1]
    }

    for(let i =1;i<=n1;i++) {
        for(let j=1;j<=n2;j++) {
            dp[i][j] = dp[i-1][j] && s1[i-1] == s3[i-1+j] || dp[i][j-1] && s2[j-1] ==s3[i+j-1]
        }
    }

    // s1的前i项，当前项就是 s1[i-1] 
    return dp[n1][n2]
};