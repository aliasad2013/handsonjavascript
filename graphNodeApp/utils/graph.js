var _ = require('lodash');

class Graph {
    constructor(users) {
        //initialize edges
        this.edges = {};
        // save users = users
        this.users = users;

        // add users and edges of each
        _.forEach(users, (user) => {
            this.edges[user.id] = user.friends;
        });
    }

    shortestPath(sourceUser, targetCompany) {
        // final shortest Path
        var shortestPath;

        // for iterating along the breadth
        var tail = 0;

        // queue of users being visited
        var queue = [sourceUser];

        // mark visited users
        var visitedNodes = [];

        // previous path the backtrack steps when shortest path is found
        var prevPath = {};

        // request is same as response
        if (_.isEqual(sourceUser.company, targetCompany)) {
            return;
        }

        // mark source user as visited so
        // next time we skip the processing 
        visitedNodes.push(sourceUser.id);

        // loop queue until match is found
        // OR until the end of the queue i.e; no match
        while (!shortestPath && tail < queue.length) {
            //take user breadth first
            var user = queue[tail];

            // take nodes forming edges with user
            var friendIds = this.edges[user.id];

            // loop over each node
            _.forEach(friendIds, (friendId) => {
                //result found in previous iterations, so we can stop
                if (shortestPath) return;

                // get all details of node
                var friend = _.find(this.users, ['id', friendId]);

                // if visited already
                // nothing to rechek so return
                if (_.includes(visitedNodes, friendId)) {
                    return;
                }

                // mark as visited
                visitedNodes.push(friendId);

                // if company matched
                if (_.isEqual(friend.company, targetCompany)) {

                    // create result path with the matched node
                    var path = [friend];

                    //keep backtracking until source user and add to path
                    while (user.id !== sourceUser.id) {
                        // add user to shortest path
                        path.unshift(user);

                        // prepare for next iteration
                        user = prevPath[user.id];
                    }

                    // add source user to the path
                    path.unshift(user);

                    // format and return shortestPath
                    shortestPath = _.map(path, 'name').join(' -> ');
                }
                //break loop if shortestPath found
                if (shortestPath) { return; }

                //no match found at current user,
                // add it to previous path to help backtracking later
                prevPath[friend.id] = user;

                // add to queue in the order of visit
                // i.e. breadth wise for next iteration
                queue.push(friend);
            });

            // increment counter
            tail++;
        }
        return shortestPath || `No path between ${sourceUser.name} & ${targetCompany}`;
    }
}
module.exports = Graph;