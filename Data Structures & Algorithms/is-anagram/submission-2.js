class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false;
        const maps1 = {};
        for(let i=0;i<s.length;i++){
            maps1[s[i]]=(maps1[s[i]] || 0) + 1;
        }
        for(let i=0;i<t.length;i++){
            if(!maps1[t[i]]) return false;
            maps1[t[i]]--;
        }
        return true;
    }
}
