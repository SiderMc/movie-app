import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MovieService } from '../../services/movie-service/movie.service';
import { Endpoints } from '../../enums/movie-endpoints';
import { Movie } from '../../models/movie';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  nowPlaying: Movie[] = [];
  topRate: Movie[] = [];
  popularMovies: Movie[] = [];
  upcoming: Movie[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovies(Endpoints.NowPlaying, 2).subscribe((movies) => {
      this.nowPlaying = movies.results;
    });
    this.movieService.getMovies(Endpoints.TopRated).subscribe((movies) => {
      this.topRate = movies.results;
    });
    this.movieService.getMovies(Endpoints.Popular).subscribe((movies) => {
      this.popularMovies = movies.results;
    });
    this.movieService.getMovies(Endpoints.Upcoming, 2).subscribe((movies) => {
      this.upcoming = movies.results;
    });
  }
}
