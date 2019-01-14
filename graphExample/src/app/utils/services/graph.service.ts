import { Injectable } from '@angular/core';
import { queueScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  vertices: number;
  numberOfEdges: number;
  adjacencyList: Array<any>;
  listOfMarkedVertices: Array<boolean>;
  edgeTo: Array<any>;
  vertexList: Array<any>;

  constructor(numberOfVertices) {
    this.vertices = numberOfVertices;
    this.numberOfEdges = 0;
    this.vertexList = []
    this.adjacencyList = [];
    this.listOfMarkedVertices = [];
    this.edgeTo = [];
    for (let count = 0; count < numberOfVertices; count++) {
      this.adjacencyList[count] = [];
      this.listOfMarkedVertices[count] = false;
      // this.adjacencyList[count].push("");
    }
  }

  public addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    this.numberOfEdges++;
  }


  // public showGraph() {
  //   this.adjacencyList.forEach((vertexValue, vertex) => {
  //     vertexValue.forEach((value) => {
  //       console.log(vertex + '->' + value + ' ');
  //     });
  //   });
  // }

  // a new function to display symbolic names instead of numbers
  public showGraph() {
    let visited = [];
    for (let i = 0; i < this.vertices; ++i) {
      console.log(this.vertexList[i] + ' -> ');
      visited.push(this.vertexList[i]);
      for (var j = 0; j < this.vertices; ++j) {
        if (this.adjacencyList[i][j] != undefined) {
          if (visited.indexOf(this.vertexList[j]) < 0) {
            console.log(this.vertexList[j] + ' ');
          }
        }
      }
      visited.pop();
    }
  }

  public depthFirstSearch(vertex) {
    this.listOfMarkedVertices[vertex] = true;
    this.adjacencyList[vertex].forEach((vertexValue) => {
      console.log('Visited Vertex:' + vertex);
      if (!this.listOfMarkedVertices[vertexValue]) {

        this.depthFirstSearch(vertexValue);
      }
    });
  }

  public breadthFirstSearch(vertex) {
    let queue = [];
    this.listOfMarkedVertices[vertex] = true;
    queue.push(vertex);
    while (queue.length > 0) {
      let currentVertex = queue.shift();
      if (currentVertex == undefined) {
        console.log('Visited Vertex:' + currentVertex);
      }

      this.adjacencyList[currentVertex].forEach(value => {
        if (!this.listOfMarkedVertices[value]) {
          this.edgeTo[value] = currentVertex;
          this.listOfMarkedVertices[value] = true;
          queue.push(value);
        }
      });
    }
  }

  public shortestPathTo(vertex): Array<any> {
    let source = 0;
    if (!this.hasPathTo(vertex)) {
      return undefined;
    }
    let path = [];
    for (let count = vertex; count !== source; count = this.edgeTo[count]) {
      path.push(count);
    }
    path.push(source);
    return path;
  }

  public hasPathTo(vertex) {
    return this.listOfMarkedVertices[vertex];
  }


  // Implementation for top sorting algorithms

  public topSort() {
    let stack = [];
    let Visited = [];
    for (let count = 0; count < this.vertices; count++) {
      Visited[count] = false;
    }
    for (let count = 0; count < this.vertices; count++) {
      if (Visited[count] == false) {
        this.topSortHelper(count, Visited, stack);
      }
    }
    for (let count = 0; count < stack.length; count++) {
      if (stack[count] !== undefined && stack[count] !== false) {
        console.log(this.vertexList[stack.pop()]);
      }
    }
  }

  public topSortHelper(vertex, Visited, stack) {
    Visited[vertex] = true;
    this.adjacencyList[vertex].forEach(element => {
      if (!Visited[element]) {
        this.topSortHelper(element, Visited, stack);
      }
    });
    stack.push(vertex);
  }
}
