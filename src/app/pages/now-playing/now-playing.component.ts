import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
})
export class NowPlayingComponent implements OnInit {
  nowPlaying: any[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.nowPlaying = this.movieService.getNowPlayingMovies();
  }
}
