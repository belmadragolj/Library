import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
   <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/books">Books</a>
      <a routerLink="/about">About</a>
    </nav>
    <router-outlet>
     </router-outlet>`
})
export class AppComponent {
  title = 'Library';
}
