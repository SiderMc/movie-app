import { MovieCardComponent } from './../../components/movie-card/movie-card.component';
import { Component, OnInit } from '@angular/core';
import { TimePipe } from '../../pipes/time.pipe';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie-service/movie.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TimePipe, RatingModule, FormsModule,MovieCardComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id!: number;
  movie: any;
  movieRating: number = 0;
  public favoriteMovies:any[]=[]
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit() { 
  this.id = +this.route.snapshot.params['id'];
  this.movie = this.movieService.getAllMovies().find(el => el.id === this.id)
  this.favoriteMovies = this.movieService.getFavoriteMovies()
  this.movieRating = Math.round(this.movie.vote_average / 2);
  }
  addToList(movie: any, listName?: string) {
  this.movieService.setMovies(movie, listName);
  }
}
