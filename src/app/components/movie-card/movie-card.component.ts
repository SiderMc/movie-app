import { Component, Input, OnInit } from '@angular/core';
import { DetailsComponent } from '../../pages/details/details.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    DetailsComponent,
    RouterModule,
    RatingModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() inListFavorite: boolean = false;
  @Input() inListWatch: boolean = false;

  movieRating: number = 0;

  constructor(private storageService: LocalStorageService) {}

  ngOnInit() {
    this.movieRating = Math.round(this.movie.vote_average / 2);
    this.inListFavorite = this.isInList(this.movie.id, 'favorite');
    this.inListWatch = this.isInList(this.movie.id, 'watch');
  }

  toggleForList(movie: any, listName: string): void {
    const isInList = this.isInList(movie.id, listName);
    if (!isInList) {
      this.storageService.setLocalStorage(movie.id, listName);
    } else {
      this.storageService.removeFromLocalStorage(movie.id, listName);
    }
    if (listName === 'favorite') {
      this.inListFavorite = !isInList;
    } else if (listName === 'watch') {
      this.inListWatch = !isInList;
    }
  }

  isInList(movieId: number, listName: string): boolean {
    const moviesId = this.storageService.getLocalStorage(listName);
    return moviesId.includes(movieId);
  }
}
