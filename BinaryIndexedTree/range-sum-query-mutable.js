/**
 * @param {number[]} nums
 */

// Given nums = [1, 3, 5]

// sumRange(0, 2) -> 9
// update(1, 2)
// sumRange(0, 2) -> 8
var NumArray = function(nums) {
  this.nums = nums;
  this.bits = [];
  for (let i=0; i<nums.length; i++) {
    this.bits[i + 1] = nums[i];
  }
  // bits[,1,3,5] 线段树
  // 从1开始遍历
  for (let i=1; i<this.bits.length; i++) {
    // k =i+2^k
    let j = i + lowbit(i);
    if (j < this.bits.length) {
      // bits[i+2^k]= bits[i+2^k]+bits[i]
      this.bits[j] += this.bits[i];
    }
  }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  let delta = val - this.nums[i];
  this.nums[i] = val;
  i += 1;
  while (i < this.bits.length) {
    i = i + lowbit(i);
    this.bits[i] += delta;
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sumPrefix(j) - this.sumPrefix(i - 1);
};

NumArray.prototype.sumPrefix = function(i) {
  i += 1;
  let result = 0;
  while (i  > 0) {
    result += this.bits[i];
    i = i - lowbit(i);
  }
  return result;
};


function lowbit(x) {
  return x&(-x);
}