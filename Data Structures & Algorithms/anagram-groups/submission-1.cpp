class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
       unordered_map<string,vector<string>> answer;
       for(string str:strs){
        string strCopy = str;
        sort(strCopy.begin(),strCopy.end());
        answer[strCopy].push_back(str);
       }
       vector<vector<string>> output;
       for(auto ans:answer){
        output.push_back(ans.second);
       }
       return output;
    }
};
