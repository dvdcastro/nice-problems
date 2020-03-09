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
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var res = sumMultiples35(n);
        if (res > 0) {
            console.log(res);
        }
    }

}

var sumMultiples35 = function(n) {
    var res = 0;

    for (var j = n-1; j > 0; j--) {
        if ((j % 3) === 0 || (j % 5) === 0) {
            res += j;
        }
    }
    
    return res;
};