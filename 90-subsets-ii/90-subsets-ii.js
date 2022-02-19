const backtrack = (res, list, nums, start) => {
    res.push([...list])
    
    for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] == nums[i - 1]) continue
        list.push(nums[i])
        backtrack(res, list, nums, i + 1)
        list.pop()
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = nums => {
    nums.sort((n1, n2) => n1 - n2)
    let res = []
    backtrack(res, [], nums, 0)
    
    return res
};