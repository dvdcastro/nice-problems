const {
  performance
} = require('perf_hooks');

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(message) {
    var theDecoder = new decoder(message);
    return theDecoder.getNumDecodings();
};

var decoder = function(message) {
    var memory = null, msgArr;
    
    var init = function(message) {
        memory = [];
        msgArr = message.split('');
        for (var i = 0; i < msgArr.length + 1; i++) {
            memory.push(null);
        }
    }
    
    var decodeMessageHelper = function(msgArr, k) {
        if (k == 0) {
            return 1;
        }

        var start = msgArr.length - k;
        if (msgArr[start] == '0') {
            return 0;
        }

        if (memory[k] !== null) {
            return memory[k];
        }

        var res = decodeMessageHelper(msgArr, k - 1);
        if (k >= 2 && parseInt(msgArr[start] + msgArr[start + 1]) <= 26) {
            res += decodeMessageHelper(msgArr, k - 2);
        }

        memory[k] = res;

        return res;
    };
    
    return {
        getNumDecodings: function() {
            init(message);
            return decodeMessageHelper(msgArr, msgArr.length);
        }
    }
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter the encoded message: ", function(message) {
    var startTime = performance.now();
    var res = numDecodings(message);
    var totalTime = performance.now() - startTime;
    console.log(`This message can be decoded in ${res} ways, it took ${totalTime} millis.`);
    rl.close();
});

rl.on("close", function() {
    console.log("\nTake care!!!");
    process.exit(0);
});