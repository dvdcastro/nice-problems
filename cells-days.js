function cellCompete(states, days)
{
    var helper = new CellCompeteHelper();
    return helper.cellCompete(states, days);
}

var CellCompeteHelper = function() {

    var state = [];

    var cellCompete = function(states, days) {
        if (days === 0) {
            return states;
        }

        for (var j = 0; j < days; j++) {
            var newStates = [];
            for(var i = 0; i < states.length; i++) {
                var leftCell = 0, rightCell = 0;

                if (i > 0) {
                    leftCell = states[i - 1];
                }

                if (i < (states.length - 1)) {
                    rightCell = states[i + 1];
                }

                if ((leftCell === 0 && rightCell === 0)
                    || (leftCell === 1 && rightCell === 1)) {
                    newStates[i] = 0;
                } else {
                    newStates[i] = 1;
                }
            }
            states = newStates;
        }

        return states;
    };

    return {
        cellCompete: cellCompete
    };
}