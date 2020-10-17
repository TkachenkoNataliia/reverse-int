module.exports = function reverse(n) {
    if (n > 0) {
        let str = n.toString();
        let result = "";
        for (let i = 0; i < str.length; i++) {
            result = str[i] + result;
        }
        return result;
    } else {
        let newN = Math.abs(n);
        let str = newN.toString();
        let result = "";
        for (let i = 0; i < str.length; i++) {
            result = str[i] + result;
        }
        return result;
    }
};
