import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movie, MovieProvider } from "../../providers/movie/movie";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public movieList$: Observable<Movie[]>;

  constructor(
    private movieProvider: MovieProvider,
    public navCtrl: NavController) {
    this.movieList$ = this.movieProvider.getMovies();
  }

  goToDetail(imdbID: string) {
    this.navCtrl.push('movie', {
      imdbID: imdbID
    });
  }
}
