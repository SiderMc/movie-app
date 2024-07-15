import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent implements OnInit {
  popularMovies: any[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.popularMovies = this.movieService.getPopularMovies();
  }
}
