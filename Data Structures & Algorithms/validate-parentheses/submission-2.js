class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const bracketsMap = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        
        for(let char of s) {
            if(bracketsMap[char]) {
                // If char is closing then it's opening should be on top of stack
                if(stack.length > 0 && stack[stack.length - 1] === bracketsMap[char]) {
                    stack.pop();
                }
                else 
                    return false;
            }
            else {
                // If it's an opening bracket then we will push it to stack
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
