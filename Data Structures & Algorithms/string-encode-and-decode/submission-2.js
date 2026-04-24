class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // We will store length of string and a delimeter let's say # before every string
        // example: "4#neet4#code4#love3#you"

        let res = '';

        for(let i = 0; i < strs.length; i++) {
            res += strs[i].length + "#" + strs[i];
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
