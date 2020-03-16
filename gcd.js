var generalizedGCD = function(num, arr) {
    return findGCD(num, arr)
};

var GeneralizedGCDHelper = function() {

    var findGCD = function(num, arr) {
        // Use spread syntax to get minimum of array
        const lowest = Math.min(...arr);

        for (let factor = lowest; factor > 1; factor--) {
            let isCommonDivisor = true;

            for (let j = 0; j < num; j++) {
                if (arr[j] % factor !== 0) {
                    isCommonDivisor = false;
                    break;
                }
            }

            if (isCommonDivisor) {
                return factor;
            }
        }

        return 1;
    }

    return {
        findGCD: findGCD
    };
};