/**
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
示例 1：
输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
 */
var addToArrayForm = function(A, K) {
    var i = A.length - 1;
    var carry = 0;
    var ans = new Array(A.length);
        
    while(i>=0 || K>0) {
        var sum = (A[i] || 0 )    + K % 10 + carry;
        carry = ~~(sum/10);
        if (i < 0) {
            ans.unshift(sum % 10);
        } else {
            ans[i] = sum % 10;
        }    
        K = ~~(K/10);
        i--;        
    }
    
    if (carry > 0) ans.unshift(carry);
    return ans;
};