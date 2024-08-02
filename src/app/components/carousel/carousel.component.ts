import { routs } from './../../paths/route-paths';
import { Movie } from './../../models/movie';
import { Component, Input } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() movies: Movie[] = [];
  @Input() title: string = '';
  routs = routs;

  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '767px',
      numVisible: 2.5,
      numScroll: 1,
    },
    {
      breakpoint: '1279px',
      numVisible: 3.5,
      numScroll: 1,
    },
  ];
  getLink(): string {
    const route = this.routs.find((route) => route.text === this.title);
    return route ? route.link : '/';
  }
}
