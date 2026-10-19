class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        map<int,bool> numMap;
        for(int num:nums){
            if(numMap[num]){
                return true;
            }
            numMap[num] = true;
        }
        return false;
    }
};