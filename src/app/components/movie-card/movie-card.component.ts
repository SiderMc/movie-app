import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from '../../pipes/time/time.pipe';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule,TimePipe,CardModule,ButtonModule,RatingModule,FormsModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() data: any;
  @Input() favorite: boolean = false;
  @Input() watch: boolean = false;

  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatch = new EventEmitter<any>();
  @Output() more = new EventEmitter<any>();
  
  public open: boolean = false;

  addToFavorite() {
    this.addFavorite.emit(this.data);
  }
  addToWatch() {
    this.addWatch.emit(this.data);
  }
  seeMore() {
    this.more.emit(this.data);
    this.open = !this.open;
  }
}
