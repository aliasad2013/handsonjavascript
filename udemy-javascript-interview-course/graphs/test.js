const Graph = require('./index');

test('graph class exists', () => {
    expect(typeof Graph.constructor).toEqual('function');
});

test('graph class exists', () => {
    let graph = new Graph(5);
    expect(graph.length).toEqual(5);
});

test('graph traverse DFS', () => {
    let graph = new Graph(5);
    graph.addEdges(0, 1);
    graph.addEdges(0, 2);
    graph.addEdges(1, 0);
    graph.addEdges(1, 3);
    graph.addEdges(2, 0);
    graph.addEdges(2, 4);
    graph.addEdges(3, 1);
    graph.addEdges(3, 4);
    graph.addEdges(4, 5);
    expect(graph.dfs_traverse(0)).toEqual([0, 1, 3, 4, 5, 2]);
});

test('Testing graph traverse using DFS', () => {
    let graph = new Graph(5);
    graph.addEdges(1, 0);
    graph.addEdges(0, 3);
    graph.addEdges(0, 2);
    graph.addEdges(2, 1);
    graph.addEdges(1, 4);
    expect(graph.dfs_traverse(0)).toEqual([0, 3, 2, 1, 4]);
});

test('Testing graph traversal using DFS Iterative version', () => {
    let graph = new Graph(5);
    graph.addEdges(1, 0);
    graph.addEdges(0, 3);
    graph.addEdges(0, 2);
    graph.addEdges(2, 1);
    graph.addEdges(1, 4);
    expect(graph.dfs_traverse_Iterative_version(0)).toEqual([0, 3, 2, 1, 4]);
});


test('Testing graph traversal using DFS Iterative version', () => {
    let graph = new Graph(5);
    graph.addEdges(0, 1);
    graph.addEdges(0, 2);
    graph.addEdges(1, 0);
    graph.addEdges(1, 3);
    graph.addEdges(2, 0);
    graph.addEdges(2, 4);
    graph.addEdges(3, 1);
    graph.addEdges(3, 4);
    graph.addEdges(4, 5);
    expect(graph.dfs_traverse_Iterative_version(0)).toEqual([0, 1, 3, 4, 5, 2]);
});


test('Testing graph traversal using BFS', () => {
    let graph = new Graph(5);

    graph.addEdges(1, 2);
    graph.addEdges(1, 3);
    graph.addEdges(2, 4);
    graph.addEdges(2, 5);
    graph.addEdges(3, 5);
    graph.addEdges(4, 2);
    graph.addEdges(4, 5);
    graph.addEdges(4, 6);
    graph.addEdges(5, 3);
    graph.addEdges(5, 4);
    graph.addEdges(5, 6);
    console.log(graph.bfs_traverse(1));
    expect(graph.bfs_traverse(1)).toEqual([1, 2, 3, 4, 5, 6]);
});