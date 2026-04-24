class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
        const tok = tokens[i];

        if (!this.isOperation(tok)) {
            stack.push(Number(tok));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            const val = this.performOperation(tok, a, b);
            stack.push(val);
        }
        }

        return stack.length ? stack[stack.length - 1] : 0;
    }

    isOperation(char) {
        return char === '+' || char === '-' || char === '*' || char === '/';
    }

    performOperation(operation, a, b) {
        if(operation === '*') return a * b;
        else if(operation === '+') return a + b;
        else if(operation === '-') return a - b;
        else if(operation === '/') return Math.trunc(a / b);
    }
}
