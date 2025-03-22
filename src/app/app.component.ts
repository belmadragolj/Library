import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `  <nav>
      <button type="button" routerLink="/home">Home</button>
    </nav>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Library';
}
