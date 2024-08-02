import { Component, Input } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Movie } from '../../models/movie';
import { Endpoints } from '../../enums/movie-endpoints';

@Component({
  selector: 'app-top-rate',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss',
})
export class TopRateComponent {
  @Input() endpoint: string = Endpoints.TopRated;
  topRate: Movie[] = [];

  constructor() {}
}
