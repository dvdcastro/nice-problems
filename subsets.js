const {
  performance
} = require('perf_hooks');

var subSetCalculator = function() {
    var result;

    var init = function() {
        result = [];
    };

    var subSetHelper = function(setArr, subSetArr, i) {
        if (i == setArr.length) {
            pushToResult(subSetArr);
        } else {
            subSetHelper(setArr, subSetArr.slice(), i+1);
            subSetArr.push(setArr[i]);
            subSetHelper(setArr, subSetArr.slice(), i+1);
        }
    };

    var pushToResult = function(arr) {
        result.push(arr);
    };

    return {
        /**
         * @param Array setArr
         */
        getAllSubsets: function(setArr) {
            init();
            subSetHelper(setArr, [], 0);
            return result;
        }
    };
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter the set numbers separated by commas: ", function(setNumberStr) {
    var setArr = setNumberStr.split(',');
    var calc = new subSetCalculator();
    var startTime = performance.now();
    var res = calc.getAllSubsets(setArr);
    var totalTime = performance.now() - startTime;
    console.log(res);
    console.log(`It took ${totalTime} millis.`);
    rl.close();
});

rl.on("close", function() {
    console.log("\nTake care!!!");
    process.exit(0);
});


