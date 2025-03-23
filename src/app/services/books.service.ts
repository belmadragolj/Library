import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  coverImage: string;
}
@Injectable({
    providedIn: 'root'
})

export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      coverImage: 'assets/images/hobbit.jfif',
    },
    {
      id: 2,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      genre: 'Science Fiction',
      coverImage: 'assets/images/Brave-new-world.jfif',
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      coverImage: 'assets/images/gatsby.jfif',
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      coverImage: 'assets/images/orwell.jfif',
    },
    {
      id: 5,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
      coverImage: 'assets/images/mockingbird.jfif',
    },
    {
      id: 6,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      coverImage: 'assets/images/pride.jfif',
    },
    {
      id: 7,
      title: 'Moby Dick',
      author: 'Herman Melville',
      genre: 'Adventure',
      coverImage: 'assets/images/moby-dick.jfif',
    },
    {
      id: 8,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      genre: 'Historical',
      coverImage: 'assets/images/war&peace.jfif',
    },
    {
      id: 9,
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      genre: 'Psychological',
      coverImage: 'assets/images/crime.jfif',
    },
    {
      id: 10,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Literary Fiction',
      coverImage: 'assets/images/the-catches.jfif',
    },
  ];

  private booksSubject = new BehaviorSubject<Book[]>(this.books);
  books$ = this.booksSubject.asObservable();

  getBooks() {
    return this.books$;
  }
}
