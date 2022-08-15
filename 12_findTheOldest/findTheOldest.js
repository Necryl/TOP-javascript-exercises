const findTheOldest = function(array) {
    let result = array.reduce((result, obj) => {
        age = (obj.yearOfDeath ? obj.yearOfDeath:new Date().getFullYear()) - obj.yearOfBirth;
        if (result[0] < age) {
            return [age, obj];
        }
        return result;
    }, [0, 'obj']);
    return result[1];
};

// Do not edit below this line
module.exports = findTheOldest;
