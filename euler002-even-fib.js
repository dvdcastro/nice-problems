process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    var evenFibHelper = new EvenFibHelper();
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(evenFibHelper.evenFib(n));
    }

}

var EvenFibHelper = function() {
    var evenSum, fibRes, maxN;

    var init  = function() {
        evenSum = 0;

        fibRes = [];

        fibRes[0] = 0;
        fibRes[1] = 1;

        maxN = null;
    };

    var fib = function(n) {
        var res = 0;

        if (maxN === null) {
            maxN = n;
        }

        if (!(typeof fibRes[n] === 'undefined')) {
            res = fibRes[n];
        } else {
            res = fib(n - 1) + fib(n - 2);
            fibRes[n] = res;
            evenSum += (res <= maxN && ((res % 2) === 0) ? res : 0);
        }

        return res;
    };

    return {
        evenFib: function(n) {
            init();
            fib(n);
            return evenSum;
        }
    }

};
