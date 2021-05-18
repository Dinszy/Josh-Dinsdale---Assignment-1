function mysteryFunction(x) {
    if (x < 2) {
        return false;
    }
    if (x != Math.round(x)) {
        return false;
    }
    var bool = true;

    for (var i = 2; i <= Math.sqrt(x); i++) {
       if (x % i == 0) {
           bool = false;
        }
    }
 
    return bool;
}

function mysteryFunction2(y) {
    let v1 = 1;
    let v2 = 1;
    let result;

    if (y > 12 || y < 0) {
        throw new Error('Out of range!');
    }
    else if (y === 0) {
        return 1;
    }
    else {
        for (let i = 1; i <= y; i++) {
            result = v1 * v2;
            v1 += 1;
            v2 = result;
        }
    return result;
    }
}

module.exports = {
    mysteryFunction,
    mysteryFunction2
}