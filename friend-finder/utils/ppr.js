const _ = require('lodash');

class PPR {
    constructor(data) {
        this.data = data;
    }
    getSuggestions(nodeId) {
        return this.personalizedPageRankGenerator(nodeId);
    }
    personalizedPageRankGenerator(nodeId) {
        // set probability of the starting node as 1
        // because we will start from that node

        var initProbablityMap = {};
        initProbablityMap[nodeId] = 1;

        // call helper to iterate thrice
        return this.pprHelper(nodeId, initProbablityMap, 3);
    }

    pprHelper(nodeId, currentProbablitiesMap, IterationCount) {
        // iteration done
        if (IterationCount === 0) {
            // get root nodes neighbors
            var currentNeighbors = this.getNeighbors(nodeId);

            //omit neighbors and self node from calculated probablities
            currentProbablitiesMap = _.omit(currentProbablitiesMap,
                currentNeighbors.concat(nodeId));

            //format data and sort by probablity of final suggestios
            return _.chain(currentProbablitiesMap)
                .map((val, key) => ({ name: key, score: val }))
                .orderBy('score', 'desc')
                .valueOf();
        } else {
            // Holds the updated set of probablities for the next iteration
            var nextIterProbabilityMap = {};

            // set alpha
            var alpha = 0.5;

            // With probability alpha, we teleport to the start node again
            nextIterProbabilityMap[nodeId] = alpha;

            //extract nodes within current loop
            var parsedNodes = _.keys(currentProbablitiesMap);

            // go to the next degree of each of the currently parsed nodes
            _.forEach(parsedNodes, (parsedId) => {

                // get current probablity of each node
                var prob = currentProbablitiesMap[parsedId];

                // get connected nodes
                var neighbors = this.getNeighbors(parsedId);

                // With probability 1 - alpha,  we move to a conneted node...
                // And at each node we distribute its current probablity equal to 
                // its neighbors
                var probToPropogate = (1 - alpha) * prob / neighbors.length;


                //spreading the probablity equally to neighbors
                _.forEach(neighbors, (neighborId) => {
                    nextIterProbabilityMap[neighborId] = (nextIterProbabilityMap[neighborId] || 0) + probToPropogate;
                });
            });

            //next iteration
            return this.pprHelper(nodeId, nextIterProbabilityMap, IterationCount - 1);
        }
    }

    getNeighbors(nodeId) {
        return _.get(this.data, [nodeId, 'neighbors']);
    }
}

module.exports = PPR;