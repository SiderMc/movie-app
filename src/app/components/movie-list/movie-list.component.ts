import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { PaginatorModule } from 'primeng/paginator';
import { MovieService } from '../../services/movie-service/movie.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, CommonModule, PaginatorModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: any[] = [];
  @Input() categoryTitle: string = '';
  @Input() endpoint: string = '';
  first: number = 0;
  rows: number = 20;
  totalRecords: number = 0;
  page: number = 1;

  constructor(
    private movieService: MovieService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    if (this.endpoint) {
      this.fetchMovies(this.page);
    }
  }

  fetchMovies(page: number): void {
    this.movieService.getMovies(this.endpoint, page).subscribe((movies) => {
      this.movies = movies.results;
      this.totalRecords = movies.total_results;
    });
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1;
    if (this.endpoint) {
      this.fetchMovies(this.page);
    }
  }

  clearList(listName: string): void {
    if (listName === 'Favorite List') {
      this.storageService.clearLocalStorageList(
        this.storageService.favoriteKey
      );
      this.movies = this.storageService.getLocalStorage(
        this.storageService.favoriteKey
      );
    } else {
      this.storageService.clearLocalStorageList(this.storageService.watchKey);
      this.movies = this.storageService.getLocalStorage(
        this.storageService.watchKey
      );
    }
  }
}
