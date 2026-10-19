class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const maps = {};
        for(let i=0;i<nums.length;i++){
            if(maps[nums[i]]) {
                return true;
            }
            maps[nums[i]] = true;
        }
        return false;
    }
}
