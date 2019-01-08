var _ = require('lodash');

class Recursion {
    constructor(tree) {
        this.tree = tree;
    }

    //serialize method which accepts list of nodes
    serialize(nodes) {
        //initialize response
        this.currentState = this.currentState || '';

        //loop over all nodes
        _.forEach(nodes, (node) => {

            // depth first traversal, extracting nodes at each level
            // traverse one level downn
            var childNodes = this.tree[node];

            // add current node to list of serialized nodes
            this.currentState += `${node}`;
            if (childNodes) {
                //recursive repeat
                this.serialize(childNodes);
            } else {
                //mark as last node, traverse up
                this.currentState += ` ^`;
            }
        });

        //loop complete, traverse one level up
        //unless already at root other wise return response
        if (!this.isRoot(nodes)) {
            this.currentState += ` ^`;
        } else {
            return this.currentState.trim();
        }
    }

    isRoot(nodes) {
        return _.isEqual(this.tree.root, nodes);
    }
}

module.exports = Recursion;