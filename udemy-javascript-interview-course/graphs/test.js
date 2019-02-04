const Graph = require('./index');

test('graph class exists', () => {
    expect(typeof Graph.constructor).toEqual('function');
});

test('graph class exists', () => {
    let graph = new Graph(5);
    expect(graph.length).toEqual(5);
});

test('graph class exists', () => {
    let graph = new Graph(5);
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

    expect(graph.length).toEquals(5);
});

