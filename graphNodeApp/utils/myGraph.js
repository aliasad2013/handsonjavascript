var _ = require('lodash');
class MyGraph {
    constructor(numberOfVertices) {
        this.adjacencyList = new Array(numberOfVertices);
        this.visitedNodes = new Array(numberOfVertices).fill(false);
        //for connected cells solution only
        this.grid = new Array('G', 'G', 'B', 'R', 'G', 'B', 'R', 'B', 'R', 'B', 'B', 'B');
        this.result = {};
    }

    addEdges(v1, v2) {
        if (!this.adjacencyList[v1]) {
            this.adjacencyList[v1] = new Array();
        }
        this.adjacencyList[v1].push(v2);
    }
    showGraph() {
        this.adjacencyList.forEach((val, index) => {
            console.log(index + "->" + val);
        });
    }
    DFS_Recursive(vertex) {

        //let neighbours = this.getNeighbours(vertex);
        //console.log(vertex + "->>");
        if (!this.adjacencyList[vertex]) return;
        this.visitedNodes[vertex] = true;
        this.adjacencyList[vertex].forEach((value, index) => {
            if (this.visitedNodes[value] === true) {
                return
            }
            this.visitedNodes[value] = true;
            console.log("visited " + value);
            this.DFS_Recursive(value)
        });
        return;
    }


    BFS_Itertive(vertex) {
        let queue = [vertex];
        let tail = 0;
        while (tail < queue.length) {
            let node = queue[tail];
            this.visitedNodes[node] = true;
            if (!this.adjacencyList[node]) {
                return;
            }
            console.log("visited->" + node);
            this.adjacencyList[node].forEach((value, index) => {
                if (this.visitedNodes[value] === true) return;
                this.visitedNodes[value] = true;
                queue.push(value);
            })
            tail++;
        }

    }

    BFS_shortestPath_Itertive(SourceVertex, destinationVertex) {
        let queue = [SourceVertex];
        let tail = 0;
        let returnpath = {};
        let nodeId;
        returnpath[SourceVertex] = SourceVertex;
        while (tail < queue.length) {
            let node = queue[tail];
            this.visitedNodes[node] = true;
            if (!this.adjacencyList[node]) {
                return;
            }
            console.log("visited->" + node);
            this.adjacencyList[node].forEach((value, index) => {
                nodeId = value;
                if (this.visitedNodes[value] === true) return;
                if (destinationVertex == value) {
                    returnpath[nodeId] = node;
                    console.log("founct it " + JSON.stringify(returnpath));
                    return;
                }
                this.visitedNodes[value] = true;
                queue.push(value);
            });
            returnpath[nodeId] = node;
            //delete path[node];
            tail++;
        }

    }

    getNeighbours(vertex) {
        return this.adjacencyList[vertex];
    }

    largetConnectedCellSolution() {
        let vertex = 0;
        console.log(this.grid);
        this.adjacencyList.forEach((vertex, index) => {
            this.traverseGridUsingDFS(index);
            console.log(`visited Nodes -> ${this.grid[index]}`);
        });
        let maxCount = 0;
        let result = "";
        Object.entries(this.result).forEach((value) => {
            console.log(value);
            if (value[1] > maxCount) {
                maxCount = value[1];
                result = value[0];
            }
        })

        console.log("working on it" + JSON.stringify(this.result));
        console.log(`the color with the largest region is ${result} and the count -> ${maxCount}`);
    }

    traverseGridUsingDFS(vertex) {

        if (this.visitedNodes[vertex] === true) return;
        this.adjacencyList[vertex].forEach((value) => {
            console.log(`vertex ${value} -> ${this.grid[value]}`);
            if (this.visitedNodes[value] == true) return;
            if (!this.result[this.grid[value]]) {
                this.result[this.grid[value]] = 1;
            }
            if (this.grid[value] == this.grid[vertex]) {
                this.visitedNodes[vertex] = true;

                this.result[this.grid[value]] += 1;
                this.traverseGridUsingDFS(value);
            }
        });
        return;
    }
}


function findShortestPath() {
    let graph = new MyGraph(5);
    graph.addEdges(0, 1);
    graph.addEdges(0, 2);

    graph.addEdges(1, 0);
    graph.addEdges(1, 3);
    //graph.addEdges(1, 4);

    graph.addEdges(2, 0);
    graph.addEdges(2, 4);

    graph.addEdges(3, 1);
    graph.addEdges(3, 4);

    graph.addEdges(4, 2);
    graph.addEdges(4, 5);
    graph.showGraph();
    console.log("lets do DFS");
    graph.BFS_shortestPath_Itertive(0, 5);
}


function findLargestConnectedCells() {
    let graph = new MyGraph(12);
    graph.addEdges(0, 1);
    graph.addEdges(0, 4);

    graph.addEdges(1, 0);
    graph.addEdges(1, 2);
    graph.addEdges(1, 5);

    graph.addEdges(2, 1);
    graph.addEdges(2, 3);
    graph.addEdges(2, 6);

    graph.addEdges(3, 2);
    graph.addEdges(3, 7);

    graph.addEdges(4, 0);
    graph.addEdges(4, 5);

    graph.addEdges(5, 1);
    graph.addEdges(5, 4);
    graph.addEdges(5, 6);
    graph.addEdges(5, 9);

    graph.addEdges(6, 2);
    graph.addEdges(6, 5);
    graph.addEdges(6, 7);
    graph.addEdges(6, 10);

    graph.addEdges(7, 3);
    graph.addEdges(7, 6);
    graph.addEdges(7, 11);

    graph.addEdges(8, 4);
    graph.addEdges(8, 9);

    graph.addEdges(9, 8);
    graph.addEdges(9, 10);

    graph.addEdges(10, 9);
    graph.addEdges(10, 11);

    graph.addEdges(11, 10);
    graph.addEdges(11, 7);
    graph.showGraph();

    console.log("lets do DFS");
    graph.largetConnectedCellSolution();

}

//findShortestPath();
findLargestConnectedCells();