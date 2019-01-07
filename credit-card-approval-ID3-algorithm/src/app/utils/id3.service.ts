import { Injectable } from '@angular/core';
import { maxBy, uniq, map, filter, without, keys, size, chain, find, countBy } from 'lodash';
import * as data from '../../assets/predictionDataWithApprovals.json';


@Injectable({
  providedIn: 'root'
})
export class ID3Service {

  constructor() { console.log(data); }

  public train(trainingData, target, attributes) {

    // extract all targets from data set e.g.
    // Yes or No
    let allTargets = uniq(map(trainingData, target));

    // only Yes or No is remaining e.g. leaf node found
    if (allTargets.length === 1) {
      return { leaf: true, value: allTargets[0] };
    }

    // calculate root node from current list of attributes
    let currentRootNode = this.getCurrentRootNode(trainingData, target, attributes);

    // form node for current root
    let node: any = { name: currentRootNode, leaf: false };

    let remainingAttributes = without(attributes, currentRootNode);
    let branches = uniq(map(trainingData, currentRootNode));

    node.branches = map(branches, (branch) => {
      let branchTrainingData = filter(trainingData, [currentRootNode, branch]);
      let node: any = { name: branch, leaf: false };

      node.branches = [];

      node.branches.push(this.train(branchTrainingData, target, remainingAttributes));
      return node;
    });
    return node;
  }
  public predict(tree, input) {
    let node = tree;

    while (!node[0].leaf) {
      let name = node[0].name;
      let inputValue = input[name];
      let childNode = filter(node[0].branches, ['name', inputValue]);
      node = childNode.length ? childNode[0].branches : [{ leaf: true, value: 'No' }];

    }
    return node[0].value;
  }

  private getCurrentRootNode(trainingData, target, attributes) {

    // get max entropy attribute
    return maxBy(attributes, (attr) => {
      // calculate information gain at each attribute
      // e.g. 'creditScore', 'creditAge' etc
      return this.gain(trainingData, target, attr);
    });
  }

  private gain(trainingData, target, attr) {
    // calculate target branches entropy e.g approved
    let targetEntropy = this.entropy(map(trainingData, target));

    // calculate the summation of all branches entropy

    let sumOfBranchEntropies =
      chain(trainingData)
        // extract branches for the given attribute
        // e.g creditScore has the branches Excellent, Good,
        // Average, Poor
        .map(attr)
        .uniq()
        .map((branch) => {
          let branchTrainingData = filter(trainingData, [attr, branch]);
          return (branchTrainingData.length / trainingData.length) * this.entropy(map(branchTrainingData, target));
        })
        .reduce(this.genericReducer, 0)
        .valueOf();
    return targetEntropy - sumOfBranchEntropies;
  }

  private entropy(vals) {
    // take all values
    return chain(vals)
      // make them unique
      // e.g. an array of Yes and No
      .uniq()
      .map((p) => -p * Math.log2(p))
      .reduce(this.genericReducer, 0)
      .valueOf();
  }
  private probablity(val, vals) {
    let instance = filter(vals, (x) => x === val).length;
    let total = vals.length;
    return instance / total;
  }

  private genericReducer(a, b) {
    return a + b;
  }

}
