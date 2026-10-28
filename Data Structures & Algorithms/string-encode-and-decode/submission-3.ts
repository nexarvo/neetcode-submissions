class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = "";

        for(const str of strs) {
            encoded += `${str.length}#${str}`
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];
        let i = 0;
        while(i < str.length) {
            let lengthStr = '';
            while(str[i] !== '#') {
                lengthStr += str[i]
                i++;
            }
            i++;

            let length = Number(lengthStr);
            let word = '';
            while(length > 0) {
                word += str[i]
                i++;
                length--;
            }
            result.push(word);
        }
        return result;
    }
}
