import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrieService {
  tree: any = {};
  constructor() { }
  add(input) {
    // set to root of tree
    let currentNode = this.tree;

    // init next value
    let nextNode = null;

    // take 1st char and trim input
    // adam for e.g; becomes a and dam

    let curChar = input.slice(0, 1);
    input = input.slice(1);

    // find first new charachter, until then keep trimming input
    while (currentNode[curChar] && curChar) {
      currentNode = currentNode[curChar];

      // update the remainder array, this will exist as we added the node earlier
      currentNode.remainder.push(input);

      // trim input
      curChar = input.slice(0, 1);
      input = input.slice(1);
    }
    // while next charachter is available keep adding new branches and prune till end

    while (curChar) {
      // new references in each loop
      nextNode = {
        remainder: [input]
      };

      // assign to current tree next node
      currentNode[curChar] = nextNode;

      // hold reference for the next loop
      currentNode = nextNode;

      // prepare for next iteration
      curChar = input.slice(0, 1);
      input = input.slice(1);

    }
  }

  search(input) {
    // get te whole tree
    let currentNode = this.tree;
    let curChar = input.slice(0, 1);

    // take first charachter
    input = input.slice(1);
    console.log(input, curChar, currentNode[curChar]);
    // keep extracting the sub-tree based on the current charachter
    while (currentNode[curChar] && curChar) {
      currentNode = currentNode[curChar];
      curChar = input.slice(0, 1);
      input = input.slice(1);
    }
    // reached the end and no subtree found
    // e.g; no data found
    if (curChar && !currentNode[curChar]) {
      return {
        remainder: []
      };
    }

    // return the node found
    return currentNode;
  }
}
