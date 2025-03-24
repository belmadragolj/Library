import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storageKey = 'theme';

  constructor() {
    if (typeof window !== 'undefined' && localStorage.getItem(this.storageKey) === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  isDark(): boolean {
    return typeof window !== 'undefined' && localStorage.getItem(this.storageKey) === 'dark';
  }

  toggleTheme(): void {
    if (typeof window !== 'undefined') {
      const isDark = this.isDark();
      if (isDark) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem(this.storageKey, 'light');
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem(this.storageKey, 'dark');
      }
    }
  }
}
