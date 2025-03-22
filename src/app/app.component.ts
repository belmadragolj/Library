import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Library';
  isHandset = false;
  isTablet = false;
  isWeb = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map((result) => result.matches),
        map((isHandset) => {
          if (isHandset) {
            console.log('Screen size is Mobile');
          }
          this.isHandset = isHandset;
          return isHandset;
        })
      )
      .subscribe();

    this.breakpointObserver
      .observe([Breakpoints.Tablet])
      .pipe(
        map((result) => result.matches),
        map((isTablet) => {
          if (isTablet) {
            console.log('Screen size is Tablet');
          }
          this.isTablet = isTablet;
          return isTablet;
        })
      )
      .subscribe();

    this.breakpointObserver
      .observe([Breakpoints.Web])
      .pipe(
        map((result) => result.matches),
        map((isWeb) => {
          if (isWeb) {
            console.log('Screen size is Web (Desktop)');
          }
          this.isWeb = isWeb;
          return isWeb;
        })
      )
      .subscribe();
  }
}
