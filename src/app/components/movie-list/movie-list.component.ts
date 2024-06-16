import { Component,EventEmitter, Input,Output } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() data: any;
  @Output() openFavorite = new EventEmitter<any>();
  @Output() watchList = new EventEmitter<any>();
  
  public favorite: boolean = false;
  public watch: boolean = false;
  public moviesWatchList: any[] = [];
  public movieFavorite: any[] = [];
 public movies = [
   {
    id: 1,
    backdrop_path: "https://image.tmdb.org/t/p/w500/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
    overview: "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
    title: "Godzilla Minus One",
    release_date: "2023-11-03",
     vote_average: 7.645 ,
    duration_of_the_movie:124,
  },
   {
    id: 2,
    backdrop_path: "https://image.tmdb.org/t/p/w500/shrwC6U8Bkst9T9J7fr1A50n6x6.jpg",
    overview: "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
    title: "Furiosa: A Mad Max Saga",
    release_date: "2024-05-22",
    vote_average: 7.686,
    vote_count: 754,
    duration_of_the_movie:148,
  },
   {
    id: 3,
    backdrop_path: "https://image.tmdb.org/t/p/w500/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
    overview: "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    title: "Civil War",
    release_date: "2024-04-10",
    vote_average: 7.061,
    vote_count: 1343,
    duration_of_the_movie:109,
  },
   {
    id: 4,
    backdrop_path: "https://image.tmdb.org/t/p/w500//xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    title: "Dune: Part Two",
    release_date: "2024-02-27",
    vote_average: 8.169,
    vote_count: 4374,
    duration_of_the_movie:166,
  },
   {
    id: 5,
    backdrop_path: "https://image.tmdb.org/t/p/w500/tkqsrARBZnWnKqv2O8n4PYry1LS.jpg",
    overview: "The Doctor and his companion travel across time and space encountering incredible friends and foes.",
    title: "Doctor Who",
    release_date: "2024-05-11",
    vote_average: 6.386,
    duration_of_the_movie:45,
  },
   {
    id: 6,
    backdrop_path: "https://image.tmdb.org/t/p/w500/nv6F6tz7r61DUhE7zgHwLJFcTYp.jpg",
    overview: "A mild-mannered professor moonlighting as a fake hit man in police stings ignites a chain reaction of trouble when he falls for a potential client.",
    title: "Hit Man",
    release_date: "2024-05-16",
    vote_average: 7.033,
    duration_of_the_movie:115,
  },
   {
    id: 7,
    backdrop_path: "https://image.tmdb.org/t/p/w500/JtN7Q03S3oq7A4KZ7Z3I7m3osP.jpg",
    overview: "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
    title: "Bad Boys: Ride or Die",
    release_date: "2024-06-05",
    vote_average: 7.407,
    duration_of_the_movie:115,
  },
   {
    id: 8,
    backdrop_path: "https://image.tmdb.org/t/p/w500/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
    overview: "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    title: "The Fall Guy",
    release_date: "2024-04-24",
    vote_average: 7.279,
    duration_of_the_movie:127,
  },
   {
    id: 9,
    backdrop_path: "https://image.tmdb.org/t/p/w500/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
    overview: "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
    title: "Atlas",
    release_date: "2024-05-23",
    vote_average: 6.709,
    duration_of_the_movie:120,
  }
];
 handleAddToFavorite(movie: any) {
   if (!this.movieFavorite.includes(movie)) {
     this.movieFavorite.push(movie);
    }
  }

  handleAddToWatchList(movie: any) {
    if (!this.moviesWatchList.includes(movie)) {
      this.moviesWatchList.push(movie);
    }
  }
openFavoriteList() {
  if (this.movieFavorite.length > 0) {
    this.openFavorite.emit(this.movieFavorite);
    this.favorite = !this.favorite;
    } 
  }
  openWatchList() {
  if (this.moviesWatchList.length > 0) {
    this.watchList.emit(this.moviesWatchList);
    this.watch = !this.watch;
  }
  }
}

