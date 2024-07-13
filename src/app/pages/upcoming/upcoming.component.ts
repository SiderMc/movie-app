import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent implements OnInit {
  upcoming: any[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.upcoming = this.movieService.getUpcomingMovies();
  }
}
