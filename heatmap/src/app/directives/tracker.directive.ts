import { Directive, Input, HostListener } from '@angular/core';
import { TrackerService } from '../tracker/tracker.service';
import { JsonpClientBackend } from '@angular/common/http';

@Directive({
  selector: '[appTracker]',
})
export class TrackerDirective {
  @Input('tracker') key: string;

  constructor(private trackerService: TrackerService) { }

  @HostListener('click', ['$event']) clicked(event: MouseEvent) {
    this.trackerService.addEvent(this.key, event);
  }


}
