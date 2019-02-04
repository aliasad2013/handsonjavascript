class graph {
    constructor(numberOfNodes) {
        this.adjList = new Array(numberOfNodes).fill([]);
        this.length = numberOfNodes;
        console.log(this.adjList);
    }

    addEdges(node1, node2) {
        this.adjList[node1].push(node2)
    }

    dfs_traverse() { }
}


module.exports = graph;