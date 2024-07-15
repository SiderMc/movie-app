import { Routes } from '@angular/router';
import { TopRateComponent } from './pages/top-rate/top-rate.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { PopularComponent } from './pages/popular/popular.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { WatchComponent } from './pages/watch/watch.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'top-rating',
    pathMatch: 'full',
  },
  {
    path: 'top-rating',
    component: TopRateComponent,
    pathMatch: 'full',
  },
  { path: 'now-playing', component: NowPlayingComponent, pathMatch: 'full' },
  { path: 'popular', component: PopularComponent, pathMatch: 'full' },
  { path: 'upcoming', component: UpcomingComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent, pathMatch: 'full' },
  { path: 'favorite', component: FavoriteComponent, pathMatch: 'full' },
  { path: 'watch', component: WatchComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
