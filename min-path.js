const {
  performance
} = require('perf_hooks');

var minPathCalculator = function() {
    var result;

    var init = function() {
        result = 0;
    };

    var minPathHelper = function(entryVal, exitVal, pathCosts) {
        var start = Math.min(entryVal, exitVal);
        var end = Math.max(entryVal, exitVal);

        var total = 0;
        var inside = 0;
        var nums = new Array(pathCosts.length);
        for(var i = 0; i < nums.length; i++) {
            nums[i]=parseInt(pathCosts[i]);
            total+=nums[i];
            if(i>=start && i<end){
                inside+=nums[i];
            }
        }

        result = Math.min(inside,total-inside);
    };

    return {
        /**
         * @param Array setArr
         */
        getMinPath: function(entryVal, exitVal, pathCosts) {
            init();
            minPathHelper(parseInt(entryVal), parseInt(exitVal), pathCosts);
            return result;
        }
    };
};

var myArgs = process.argv.slice(2);
if (myArgs.length === 1) {
    var fileName = myArgs[0];
    var fs = require('fs');
    fs.readFile(fileName, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var lines = data.split(/\r?\n/);
        var entranceArr = lines[0].split(' ');
        var pathCosts = lines[1].split(' ');
        var calc = new minPathCalculator();
        var startTime = performance.now();
        var res = calc.getMinPath(entranceArr[0], entranceArr[1], pathCosts);
        var totalTime = performance.now() - startTime;
        console.log(res);
        console.log(`It took ${totalTime} millis.`);
    });
} else {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter the entraces separated by spaces: ", function(entrances) {
        var entranceArr = entrances.split(' ');
        rl.question("Please enter the path costs separated by spaces: ", function(pathCostsStr) {
            var pathCosts = pathCostsStr.split(' ');
            var calc = new minPathCalculator();
            var startTime = performance.now();
            var res = calc.getMinPath(entranceArr[0], entranceArr[1], pathCosts);
            var totalTime = performance.now() - startTime;
            console.log(res);
            console.log(`It took ${totalTime} millis.`);
            rl.close();
        });
        
    });

    rl.on("close", function() {
        console.log("\nTake care!!!");
        process.exit(0);
    });
}


