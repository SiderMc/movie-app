import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieDetails, MovieResponse } from '../../models/movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something went wrong. Please try again .')
    );
  }

  getMovies(endpoint: string, page: number = 1): Observable<MovieResponse> {
    return this.http
      .get<MovieResponse>(
        `${environment.baseUrl}${endpoint}?api_key=${environment.apiKey}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  getMovieById(id: number): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>(
        `${environment.baseUrl}${id}?api_key=${environment.apiKey}`
      )
      .pipe(catchError(this.handleError));
  }
}
