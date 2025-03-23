import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  coverImage: string;
  description: string;
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
          description: 'A timeless fantasy adventure following Bilbo Baggins as he embarks on a journey to reclaim a lost treasure guarded by the dragon Smaug.'
        },
        {
          id: 2,
          title: 'Brave New World',
          author: 'Aldous Huxley',
          genre: 'Science Fiction',
          coverImage: 'assets/images/Brave-new-world.jfif',
          description: 'A dystopian vision of a future society driven by technological advancements, consumerism, and the loss of individual freedom.'
        },
        {
          id: 3,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          genre: 'Fiction',
          coverImage: 'assets/images/gatsby.jfif',
          description: 'A tragic tale of wealth, love, and the American Dream, set against the glittering backdrop of the Jazz Age.'
        },
        {
          id: 4,
          title: '1984',
          author: 'George Orwell',
          genre: 'Dystopian',
          coverImage: 'assets/images/orwell.jfif',
          description: 'A chilling novel about a totalitarian regime that controls every aspect of life, exploring themes of surveillance, propaganda, and rebellion.'
        },
        {
          id: 5,
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          genre: 'Classic',
          coverImage: 'assets/images/mockingbird.jfif',
          description: 'A powerful story about racial injustice and moral growth in the American South, seen through the eyes of a young girl.'
        },
        {
          id: 6,
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          genre: 'Romance',
          coverImage: 'assets/images/pride.jfif',
          description: 'A witty and romantic novel that explores themes of love, class, and social expectations in 19th-century England.'
        },
        {
          id: 7,
          title: 'Moby Dick',
          author: 'Herman Melville',
          genre: 'Adventure',
          coverImage: 'assets/images/moby-dick.jfif',
          description: 'An epic tale of obsession and revenge as Captain Ahab hunts the elusive white whale, Moby Dick.'
        },
        {
          id: 8,
          title: 'War and Peace',
          author: 'Leo Tolstoy',
          genre: 'Historical',
          coverImage: 'assets/images/war&peace.jfif',
          description: 'A sweeping historical novel that chronicles the lives of aristocratic families during the Napoleonic Wars.'
        },
        {
          id: 9,
          title: 'Crime and Punishment',
          author: 'Fyodor Dostoevsky',
          genre: 'Psychological',
          coverImage: 'assets/images/crime.jfif',
          description: 'A gripping psychological novel that follows a young man struggling with guilt and morality after committing a murder.'
        },
        {
          id: 10,
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          genre: 'Literary Fiction',
          coverImage: 'assets/images/the-catches.jfif',
          description: 'A coming-of-age story following Holden Caulfield, a rebellious teenager searching for meaning and authenticity in an artificial world.'
        }
      ];      

  private booksSubject = new BehaviorSubject<Book[]>(this.books);
  books$ = this.booksSubject.asObservable();

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  updateBook(updatedBook: Book) {
    this.books = this.books.map(book => (book.id === updatedBook.id ? updatedBook : book));
    this.booksSubject.next(this.books); 
  }

  addBook(newBook: Book) {
    newBook.id = this.books.length + 1;
    this.books = [...this.books, newBook];
    this.booksSubject.next(this.books); 
  }
}
