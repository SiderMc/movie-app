import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { forkJoin } from 'rxjs';
import { MovieDetails } from '../../models/movie';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss',
})
export class WatchComponent {
  watchMovies: MovieDetails[] = [];
  constructor(
    private movieService: MovieService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.storageService.watchList$.subscribe((watchMovieIds: number[]) => {
      if (watchMovieIds.length) {
        const movieDetailsObservables = watchMovieIds.map((id: number) =>
          this.movieService.getMovieById(id)
        );
        console.log('sss');

        forkJoin(movieDetailsObservables).subscribe(
          (movies: MovieDetails[]) => {
            this.watchMovies = movies;
          }
        );
      } else {
        this.watchMovies = [];
      }
    });
  }
}
