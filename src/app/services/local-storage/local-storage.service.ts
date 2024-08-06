import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  readonly favoriteKey: string = 'favorite';
  readonly watchKey: string = 'watch';

  private readonly favoriteMoviesSubject$ = new BehaviorSubject<number[]>(
    this.getLocalStorage(this.favoriteKey)
  );
  private readonly watchListSubject$ = new BehaviorSubject<number[]>(
    this.getLocalStorage(this.watchKey)
  );

  public readonly favoriteMovies$: Observable<number[]> =
    this.favoriteMoviesSubject$.asObservable();
  public readonly watchList$: Observable<number[]> =
    this.watchListSubject$.asObservable();

  constructor() {}

  private updateStorage(
    movieId: number,
    key: string,
    subject: BehaviorSubject<number[]>
  ): void {
    try {
      const movies = this.getLocalStorage(key);

      if (!movies.includes(movieId)) {
        movies.push(movieId);
        localStorage.setItem(key, JSON.stringify(movies));
        subject.next(movies);
      }
    } catch (error) {
      console.error(error);
    }
  }

  getLocalStorage(key: string): number[] {
    try {
      const list = localStorage.getItem(key);
      return list ? JSON.parse(list) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  setLocalStorage(movieId: number, listName: string): void {
    try {
      const key = listName === 'favorite' ? this.favoriteKey : this.watchKey;
      const subject =
        listName === 'favorite'
          ? this.favoriteMoviesSubject$
          : this.watchListSubject$;
      this.updateStorage(movieId, key, subject);
    } catch (error) {
      console.error(error);
    }
  }

  removeFromLocalStorage(movieId: number, listName: string): void {
    try {
      const key = listName === 'favorite' ? this.favoriteKey : this.watchKey;
      const subject =
        listName === 'favorite'
          ? this.favoriteMoviesSubject$
          : this.watchListSubject$;
      const movies = this.getLocalStorage(key);
      const movieIndex = movies.indexOf(movieId);

      if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);
        if (movies.length === 0) {
          this.clearLocalStorageList(key);
        } else {
          localStorage.setItem(key, JSON.stringify(movies));
          subject.next(movies);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  clearLocalStorageList(key: string): void {
    try {
      localStorage.removeItem(key);
      if (key === this.favoriteKey) {
        this.favoriteMoviesSubject$.next([]);
      } else if (key === this.watchKey) {
        this.watchListSubject$.next([]);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
