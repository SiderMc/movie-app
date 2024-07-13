import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from './../../../movies/movies';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  favoriteMovies: any[] = [];
  watchMovies: any[] = [];

  constructor() {}
  getPopularMovies() {
    return popularMovies;
  }
  getTopRateMovies() {
    return topRatedMovies;
  }
  getUpcomingMovies() {
    return upcomingMovies;
  }
  getNowPlayingMovies() {
    return nowPlayingMovies;
  }
  getAllMovies() {
    return [
      ...nowPlayingMovies,
      ...popularMovies,
      ...topRatedMovies,
      ...upcomingMovies,
    ];
  }
  getFavoriteMovies() {
    return this.favoriteMovies;
  }
  getWatchMovies() {
    return this.watchMovies;
  }
  setMovies(movie: any, listName?: string) {
    if (listName === 'favorite') {
      if (
        !this.favoriteMovies.some(
          (el) => el.id === movie.id || el.title === movie.title
        )
      ) {
        this.favoriteMovies.push(movie);
      }
    } else {
      if (
        !this.watchMovies.some(
          (el) => el.id === movie.id || el.title === movie.title
        )
      ) {
        this.watchMovies.push(movie);
      }
    }
  }
}
