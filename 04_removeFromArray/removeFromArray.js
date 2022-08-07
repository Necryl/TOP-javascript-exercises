const removeFromArray = function(theArray) {
    let index;

    for (let i = 1; i < arguments.length; i++) {
    
        index = theArray.findIndex((string) => {
            if (string === arguments[i]) {
                return true;
            } else {
                return false;
            }
        });

        if (index >= 0) {
            theArray.splice(index, 1);
        }
    }

    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
