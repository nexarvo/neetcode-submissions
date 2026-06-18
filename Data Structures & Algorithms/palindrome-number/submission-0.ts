class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {
        if(x < 0) {
            // Because negative numbers could not be isPalindrome
            // Like -123 != 123-
            return false;
        }

        let div = 1;
        while(x >= 10 * div) {
            // Make div as big as the x is
            // Like x=123 then div should 100
            //if x=12 then div should 10
            div *= 10;
        }

        while(x != 0) {
            const right = x % 10;
            const left = Math.floor(x / div);

            if(left !== right) {
                return false;
            }

            x = Math.floor((x % div) / 10);
            // We are dividing by 100 because we have chopped left most and right now part of x;
            div = Math.floor(div / 100)
        }

        return true;
    }
}
