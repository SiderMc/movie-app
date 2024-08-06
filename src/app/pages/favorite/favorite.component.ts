import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { forkJoin } from 'rxjs';
import { MovieDetails } from '../../models/movie';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favoriteMovies: MovieDetails[] = [];

  constructor(
    private movieService: MovieService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.storageService.favoriteMovies$.subscribe(
      (favoriteMovieIds: number[]) => {
        if (favoriteMovieIds.length) {
          const movieDetailsObservables = favoriteMovieIds.map((id: number) =>
            this.movieService.getMovieById(id)
          );

          forkJoin(movieDetailsObservables).subscribe(
            (movies: MovieDetails[]) => {
              this.favoriteMovies = movies;
            }
          );
        } else {
          this.favoriteMovies = [];
        }
      }
    );
  }
}
