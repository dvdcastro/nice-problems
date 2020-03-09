const {
  performance
} = require('perf_hooks');

function decode_message_helper(msgArr, k) {
    if (k == 0) {
        return 1;
    }

    var start = msgArr.length - k;
    if (msgArr[start] == '0') {
        return 0;
    }

    var res = decode_message_helper(msgArr, k - 1);
    if (k >= 2 && parseInt(msgArr[start] + msgArr[start + 1]) <= 26) {
        res += decode_message_helper(msgArr, k - 2);
    }
    return res;
}

function calculate_ways(message) {
    var msgArr = message.split('');
    return decode_message_helper(msgArr, msgArr.length);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter the encoded message: ", function(message) {
    var startTime = performance.now();
    var res = calculate_ways(message);
    var totalTime = performance.now() - startTime;
    console.log(`This message can be decoded in ${res} ways, it took ${totalTime} millis.`);
    rl.close();
});

rl.on("close", function() {
    console.log("\nTake care!!!");
    process.exit(0);
});