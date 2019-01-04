import { Component } from '@angular/core';
import { TrackerService } from "./tracker/tracker.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heatmap';
}
