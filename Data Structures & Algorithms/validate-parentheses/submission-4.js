class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
            '}': '{',
            ']': '[',
            ')': '('
        }

        for (const char of s) {
            if (char === '{' || char === '[' || char === '(') {
                stack.push(char);
            }
            else {
                const temp = stack.pop()
                console.log("temp: ", temp)
                console.log("char: ", char)
                if (temp !== closeToOpen[char])
                    return false;
            }
        }

        if (stack.length === 0)
            return true;


        return false;
    }
}
