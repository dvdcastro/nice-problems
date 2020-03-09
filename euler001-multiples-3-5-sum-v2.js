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
    var t = parseInt(readLine()), numArr = [3,5], lcm = 15;
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var res = sumMultiples(numArr, lcm, n-1);
        if (res > 0) {
            console.log(res);
        }
    }

}

var sumMultiples = function(numArr, lcm, n) {
    var res = 0;

    for (var i = 0; i < numArr.length; i++) {
        res += sum(n, numArr[i]);        
    }

    res -= sum(n, lcm);
    
    return res;
};

var sum = function(n, num) {
    var d = Math.floor(n/num);
    return Math.floor(num * (d * (d + 1) / 2));
};
