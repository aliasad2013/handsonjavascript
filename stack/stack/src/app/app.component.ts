import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Stack } from "./utils/stack";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'stack';

  constructor(private stack: Stack, private router: Router) {
    //Subscribe ti the routers event
    this.router.events
      .subscribe((val) => {
        //determine of router is telling that it has ended transition
        if (val instanceof NavigationEnd) {
          this.stack.push(val);
        }
      });
  }

  goBack(): void {
    let current = this.stack.pop();
    let prev = this.stack.peek();
    if (prev) {
      this.stack.pop();
      this.router.navigateByUrl(prev.urlAfterRedirects);
    } else {
      this.stack.push(current);
    }
  }
}
