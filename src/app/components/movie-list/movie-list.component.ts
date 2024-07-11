import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent,CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() movies: any[] = [];
  @Input() categoryTitle: string = '';

}
