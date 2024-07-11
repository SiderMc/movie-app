import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss'
})
export class WatchComponent {
public watchMovies:any[]=[]
  constructor(private movieService: MovieService) {
  }
  ngOnInit() {
  this.watchMovies= this.movieService.getWatchMovies()
  }
}
