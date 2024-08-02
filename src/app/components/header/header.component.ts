import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  favoriteListLength: number = 0;
  watchListLength: number = 0;
  private favoriteMoviesSubscription: Subscription | undefined;
  private watchListSubscription: Subscription | undefined;

  constructor(private storageService: LocalStorageService) {}

  ngOnInit(): void {
    this.favoriteMoviesSubscription =
      this.storageService.favoriteMovies$.subscribe(
        (movies) => (this.favoriteListLength = movies.length)
      );

    this.watchListSubscription = this.storageService.watchList$.subscribe(
      (movies) => (this.watchListLength = movies.length)
    );
  }

  ngOnDestroy(): void {
    if (this.favoriteMoviesSubscription) {
      this.favoriteMoviesSubscription.unsubscribe();
    }
    if (this.watchListSubscription) {
      this.watchListSubscription.unsubscribe();
    }
  }
}
