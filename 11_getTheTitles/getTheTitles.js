const getTheTitles = function(array) {
    let result = [];
    array.forEach(obj => {
        result.push(obj.title);
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
