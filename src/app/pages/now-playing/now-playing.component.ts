import { Component, Input } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Movie } from '../../models/movie';
import { Endpoints } from '../../enums/movie-endpoints';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
})
export class NowPlayingComponent {
  @Input() endpoint: string = Endpoints.NowPlaying;
  nowPlaying: Movie[] = [];
  constructor() {}
}
