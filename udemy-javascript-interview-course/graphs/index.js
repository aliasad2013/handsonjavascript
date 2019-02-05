class graph {
    constructor(numberOfNodes) {
        this.length = numberOfNodes;
        this.adjList = new Array(this.length);
        this.visited = {};
        this.visitedSequence = [];
        console.log(this.adjList);
    }

    addEdges(node1, node2) {
        if (!this.adjList[node1]) this.adjList[node1] = [];
        this.adjList[node1].push(node2);
    }
    showGraph() {
        return this.adjList;
    }
    //Following is the Recursive method to perform Depth First Search
    dfs_traverse(node) {
        if (!this.adjList[node]) return;
        this.visited[node] = true;
        if (this.visitedSequence.length == 0) this.visitedSequence.push(node);
        this.adjList[node].forEach((value) => {
            if (this.visited[value]) return;
            this.visited[value] = true;
            this.visitedSequence.push(value);
            this.dfs_traverse(value);
        });
        return this.visitedSequence;
    }

    //Following is the Iterative method to perform Depth First Search in a Graph
    dfs_traverse_Iterative_version(node) {
        if (!this.adjList[node]) return;
        let list = [node];

        while (list.length > 0) {
            node = list.shift();
            if (!this.visited[node]) {
                this.visited[node] = true;
                this.visitedSequence.push(node);
                if (this.adjList[node]) {
                    list.unshift(...this.adjList[node]);
                }
            }
        }
        return this.visitedSequence;
    }


    bfs_traverse(node) {
        if (!this.adjList[node]) return;
        let list = [node];

        while (list.length > 0) {
            node = list.shift();
            if (!this.visited[node]) {
                console.log(node, list);
                this.visited[node] = true;
                this.visitedSequence.push(node);
                if (this.adjList[node]) {
                    list.push(...this.adjList[node]);
                }
            }
        }
        return this.visitedSequence;
    }
}


module.exports = graph;