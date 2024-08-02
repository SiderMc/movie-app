import { Component, Input, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie-service/movie.service';
import { Movie } from '../../models/movie';
import { Endpoints } from '../../enums/movie-endpoints';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent {
  @Input() endpoint: string = Endpoints.Upcoming;
  upcoming: Movie[] = [];
  constructor() {}
}
