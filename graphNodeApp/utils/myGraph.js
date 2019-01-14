class MyGraph {
    constructor(numberOfVertices) {
        this.adjacencyList = new Array(numberOfVertices);
        this.visitedNodes = new Array(numberOfVertices).fill(false);
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
        let path = {};
        path[SourceVertex] = SourceVertex;
        while (tail < queue.length) {
            let node = queue[tail];
            this.visitedNodes[node] = true;
            if (!this.adjacencyList[node]) {
                return;
            }
            console.log("visited->" + node);
            path[node] = node;
            this.adjacencyList[node].forEach((value, index) => {
                if (this.visitedNodes[value] === true) return;
                if (destinationVertex == value) {
                    path[value] = value;
                    console.log("founct it " + JSON.stringify(path));
                    return;
                }
                this.visitedNodes[value] = true;
                queue.push(value);
            })
            //delete path[node];
            tail++;
        }

    }

    getNeighbours(vertex) {
        return this.adjacencyList[vertex];
    }


}





let graph = new MyGraph();
graph.addEdges(0, 1);
graph.addEdges(0, 2);
graph.addEdges(1, 0);
//graph.addEdges(1, 4);
graph.addEdges(1, 3);
graph.addEdges(2, 3);
graph.addEdges(2, 4);
graph.addEdges(3, 2);
graph.addEdges(3, 4);
graph.addEdges(4, 5);
graph.addEdges(5, 4);
graph.showGraph();
console.log("lets do BFS");
graph.BFS_shortestPath_Itertive(0, 5);
