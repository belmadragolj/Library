import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Library';
  isHandset = false;
  isTablet = false;
  isWeb = false;
  currentRoute: string = '';
  isCurrentRouteHome: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private renderer: Renderer2
  ) {
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

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (typeof document !== 'undefined') {
          if (event.urlAfterRedirects !== '/home') {
            this.renderer.addClass(document.body, 'no-background');
          } else {
            this.renderer.removeClass(document.body, 'no-background');
          }
        }
      }
    })
  }
}