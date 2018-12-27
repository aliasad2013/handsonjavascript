import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keyboard-shortcuts';

  // define the keyMap
  keyMap = new Map();

  @HostListener('document:keydown', ['$event'])
  onkeydown(ev: KeyboardEvent) {
    //filter out all non CTRL key presses and when only CTRL is key press

    if (ev.ctrlKey && ev.keyCode !== 17) {
      // check if user selection is already registered
      if (this.keyMap.has(`ctrl+${ev.key}`)) {
        // extract the registered path
        const path = this.keyMap.get(`ctrl+${ev.key}`);

        // navigate
        this.router.navigateByUrl(path);
      }
    }
  }

  constructor(private router: Router) {
    // loop over the router confirguation
    this.router.config.forEach((routerConf) => {
      // extract the keymap
      const keymap = routerConf.data ? routerConf.data.keymap : undefined;

      /* if keymap exists for the router and is not a duplicate, 
       * then add to master list
       * */
      if (keymap && !this.keyMap.has(keymap)) {
        this.keyMap.set(keymap, `${routerConf.path}`);
      }

    });
  }
}
