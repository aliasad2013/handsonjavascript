import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  worker: any;

  constructor() {
    this.setupTracker();
  }
  setupTracker() {
    this.worker = new Worker('script.bundle.js');
  }

  addEvent(key: string, event: any, customValue?: string) {
    this.worker.postMessage({
      key: key,
      user: 'user_id_here',
      event: {
        pageX: event.pageX,
        pageY: event.pageY
      },
      customValue: customValue
    });
  }
}
