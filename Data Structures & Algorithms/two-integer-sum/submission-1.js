class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = new Map();
        for(let i=0;i<nums.length;i++){
            const find = target-nums[i];
            if(maps.has(find)) return [maps.get(find),i];
            maps.set(nums[i], i);
        }
        return [];
    }
}
