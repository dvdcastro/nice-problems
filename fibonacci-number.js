/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    return helper.fib(N);
};


const FibHelper = function() {
    let mem = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811
    ], biggestN = mem.length - 1;

    const fib = function(n) {
        if (n <= biggestN) {
            return mem[n];
        }
        
        if (n <= 1){
            return n;
        }

        for (let i = biggestN; i <= n; i++) {
            mem[i] = mem[i - 1] + mem[i - 2];
        }
        
        biggestN = n;

        return mem[n];
    };

    return {
        fib: fib
    };
};

const helper = new FibHelper();