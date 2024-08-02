import { Component, Input, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';
import { Movie } from '../../models/movie';
import { Endpoints } from '../../enums/movie-endpoints';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent {
  @Input() endpoint: string = Endpoints.Popular;
  popularMovies: Movie[] = [];
  constructor() {}
}
