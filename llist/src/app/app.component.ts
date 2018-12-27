import { Component } from '@angular/core';
import { Llist } from './util/llist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'llist';



  constructor() {
    let cities = new Llist();
    cities.append("LA");
    console.log(cities.DisplayAllNodes());
    cities.append("Houston");
    cities.append("Newyork");
    console.log(cities.DisplayAllNodes());
    cities.insert("Dallas", "Houston");
    console.log(cities.DisplayAllNodes());
    cities.prepend("San Francisco");
    cities.append("Boston");
    cities.DeletewithValue("Houston");
    console.log(cities.DisplayAllNodes());

  }
}
