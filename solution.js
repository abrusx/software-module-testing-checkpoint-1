export default function balancedBrackets(str) {
    return false //test-error 
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (const char of str) {
        if (char in pairs) {
        stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
        if (stack.length === 0) return false;
        const last = stack.pop();
        if (pairs[last] !== char) return false;
        }
    }
    return stack.length === 0;
}
