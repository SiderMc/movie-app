
import { Component, Input, OnInit } from '@angular/core';
import { DetailsComponent } from '../../pages/details/details.component';
import { RouterModule } from '@angular/router';
import { TimePipe } from '../../pipes/time.pipe';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie-service/movie.service';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [DetailsComponent,RouterModule,TimePipe,RatingModule,FormsModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit{
  @Input() movie: any
  movieRating: number = 0;
  constructor(private movieService:MovieService){}
  addToList(movie: any, listName?: string) {
  this.movieService.setMovies(movie, listName);
  }
  ngOnInit() {
  this.movieRating = Math.round(this.movie.vote_average / 2);
  }
}
