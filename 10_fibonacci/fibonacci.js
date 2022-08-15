const fibonacci = function(num) {
    if (typeof num  === 'string') {
        num = parseInt(num);
    }
    if (num < 1) {
        return "OOPS";
    } else if (num < 3) {
        return 1;
    }
    let history = [1, 1];
    let result;
    for (let i = 2; i < num; i++) {
        result = history[0] + history[1];
        history[0] = history[1];
        history[1] = result;
    }
    return result
};

// Do not edit below this line
module.exports = fibonacci;
