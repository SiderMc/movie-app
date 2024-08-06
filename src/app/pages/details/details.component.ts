import { MovieCardComponent } from './../../components/movie-card/movie-card.component';
import { Component, OnInit } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie-service/movie.service';
import { MovieDetails } from '../../models/movie';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RatingModule, FormsModule, MovieCardComponent, NotFoundComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id!: number;
  movie!: MovieDetails;
  movieRating: number = 0;
  favoriteMovies: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private storageService: LocalStorageService
  ) {}
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe((response) => {
      this.movie = response;
      this.movieRating = Math.round(response.vote_average / 2);
    });
  }
  addToList(movie: any, listName: string): void {
    this.storageService.setLocalStorage(movie, listName);
  }
}
