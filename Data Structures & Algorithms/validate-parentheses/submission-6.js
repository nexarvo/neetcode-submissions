class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpenMap = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        const stack = [];

        for(const character of s) {
            if(character === '(' || character === '{' || character === '[') {
                stack.push(character);
            }
            else {
                const poped = stack.pop();

                if(closeToOpenMap[character] !== poped) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
