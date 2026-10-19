class Solution {
public:
    bool isAnagram(string firstString, string secondString) {
        unordered_map<int,int> firstStringMap, secondStringMap;
        for(char character:firstString){
            firstStringMap[character]++;
        }
        for(char character:secondString){
            secondStringMap[character]++;
        }
        if(firstStringMap == secondStringMap) return true;
        return false;
    }
};
