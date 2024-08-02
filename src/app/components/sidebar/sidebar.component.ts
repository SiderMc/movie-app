import { routs } from './../../paths/route-paths';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingComponent } from '../../pages/upcoming/upcoming.component';
import { PopularComponent } from '../../pages/popular/popular.component';
import { TopRateComponent } from '../../pages/top-rate/top-rate.component';
import { NowPlayingComponent } from '../../pages/now-playing/now-playing.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    UpcomingComponent,
    PopularComponent,
    TopRateComponent,
    NowPlayingComponent,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();
  isOpenSidebar: boolean = false;
  routs = routs;
  handleOpenSidebar(): void {
    this.isOpenSidebar = !this.isOpenSidebar;
    this.sidebarToggle.emit(this.isOpenSidebar);
  }
}
