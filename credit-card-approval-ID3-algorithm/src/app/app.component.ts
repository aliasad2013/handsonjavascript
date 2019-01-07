import { Component, OnInit } from '@angular/core';
import * as creditCardData from '../assets/predictionDataWithApprovals.json';
import { ID3Service } from './utils/id3.service.js';
import { without, keys, filter } from 'lodash';
import { TreeviewComponent } from './utils/components/treeview/treeview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'credit-card-approval-ID3-algorithm';
  tree;
  tests: any;
  accuracypct: any;
  constructor(private id3: ID3Service) {
    console.log(creditCardData.default);
  }



  ngOnInit() {
    this.tree = this.id3.train(creditCardData.default,
      'approved',
      without(keys(creditCardData.default), 'approved'));

    this.tests = creditCardData.default;

    this.tests.forEach((test) => {
      test.actual = this.id3.predict([this.tree], test);
      test.accurate = test.expected === test.actual;
    });

    this.accuracypct = (filter(this.tests, { accurate: true }).length / this.tests.length) * 100;
  }
}
