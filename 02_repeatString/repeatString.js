const repeatString = function(string, num) {
    let result = '';

    if (num >= 0) {
        for (let index = 0; index < num; index++) {
            result += string;
        }
    } else {
        result = "ERROR"

    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
