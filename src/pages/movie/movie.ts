import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie, MovieProvider} from "../../providers/movie/movie";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'movie'
})
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  movie$: Observable<Movie>;

  constructor(
    private movieProvider: MovieProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.movie$ = this.movieProvider.getMovie(navParams.get('imdbID'));
  }

  ionViewDidLoad() {
  }

}
