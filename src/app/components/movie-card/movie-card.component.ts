import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from '../../pipes/time/time.pipe';


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule,TimePipe],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() data: any;
  @Input() favorite: boolean = false;
  @Input() watch: boolean = false;

  open: boolean = false;

  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatch = new EventEmitter<any>();
  @Output() more = new EventEmitter<any>();

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
