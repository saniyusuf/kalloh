import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {map, share} from "rxjs/operators";

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getMovies(): Observable<Movie[]>{
    return this.http
      .get<Movie[]>('https://api.myjson.com/bins/x5g4x');
  }

  getMovie(imdbID: string): Observable<Movie>{
    return this.getMovies()
      .pipe(
        map((movies)=> {
          return movies.find((movie)=> {
            return movie.imdbID === imdbID
          });
        }),
        share()
      );
  }

}

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: boolean | string;
  Preview: string;
  Featured?: boolean;
  FeaturedImage?: string;
  Trending?: boolean;
  TopPick?: boolean;
  totalSeasons?: string;
}
