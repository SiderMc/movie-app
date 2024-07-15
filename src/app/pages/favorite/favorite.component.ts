import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent implements OnInit {
  favoriteMovies: any[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.favoriteMovies = this.movieService.getFavoriteMovies();
  }
}
