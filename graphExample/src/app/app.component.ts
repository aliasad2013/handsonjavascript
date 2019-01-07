import { Component } from '@angular/core';
import { GraphService } from './utils/services/graph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graphExample';
  constructor() {
    let g = new GraphService(6);
    g.addEdge(1, 2);
    g.addEdge(2, 5);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(0, 1);

    g.vertexList = ['CS1', 'CS2', 'Data Structures',
      'Assembly Language', 'Operating Systems',
      'Algorithms'];
    g.showGraph();
    g.topSort();
    // let vertex = 4;
    // let paths = g.shortestPathTo(vertex);
    // console.log(paths);
    // while (paths.length > 0) {
    //   if (paths.length > 1) {
    //     console.log(paths.pop() + '-');
    //   }
    //   else {
    //     console.log(paths.pop());
    //   }
    // }
  }
}
