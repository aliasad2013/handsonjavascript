import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parser';
  worker;
  result;
  code = "";
  ngOnInit() {
    this.worker = new Worker('scripts.bundle.js');
    this.worker.addEventListener('message', (e) => {
      this.result = e.data;
    });
  }
  codeChange() {
    this.worker.postMessage(this.code);
  }




}
