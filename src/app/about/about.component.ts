import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book, BooksService } from '../services/books.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-about',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchQuery: string = '';
  isDarkMode: boolean = false;

  constructor(private booksService: BooksService, private themeService: ThemeService) {
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
      this.filteredBooks = books; 
    });
    this.isDarkMode = this.themeService.isDark();
  }

  filterBooks() {
    if (!this.searchQuery.trim()) {
      this.filteredBooks = this.books; 
      return;
    }

    this.filteredBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDark();
  }
}
