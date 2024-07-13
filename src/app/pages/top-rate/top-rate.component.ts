import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-top-rate',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss',
})
export class TopRateComponent implements OnInit {
  topRate: any[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.topRate = this.movieService.getTopRateMovies();
  }
}
