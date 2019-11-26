/**
 * 给定两个数组，编写一个函数来计算它们的交集。
  示例 1:
  输入: nums1 = [1,2,2,1], nums2 = [2,2]
  输出: [2,2]
  示例 2:
  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出: [4,9]
 */



var intersect = function(nums1, nums2) {
    // 暴力
    const intersection = [];
    for(let i = 0; i < nums1.length; i++) {
      let j = nums2.indexOf(nums1[i]);
      if(j > -1) {
        intersection.push(nums2.splice(j,1)[0]);
      }
    }
    return intersection;
};

var intersect = function (nums1, nums2) {
    // hash法
      const [hash,res] = [new Map(),[]]
      nums1.forEach(el=>{
        if (hash.has(el)) {
          hash.set(el, hash.get(el) + 1)
        } else {
          hash.set(el, 1)
        }
      })
      nums2.forEach(el=>{
        const hashKey = hash.get(el)
        if (hash.has(el)) {
          res.push(el)
          if (hashKey > 1) {
            hash.set(el, hashKey - 1)
          } else {
            hash.delete(el)
          }
        }
      })
      return res
}

var intersect = function (nums1, nums2) {
   // 双指针法
  let p1 = 0
  let p2 = 0
  let res = []
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] == nums2[p2]) {
      res.push(nums1[p1])
      p1++
      p2++
    } else if (nums1[p1] < nums2[p2]) {
      p1++
    } else {
      p2++
    }
  }
  return res
}