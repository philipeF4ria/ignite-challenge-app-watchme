import '../styles/content.scss';

import { Header } from './Header';
import { MovieCard } from './MovieCard';

type Props = {
  selectedGenre: {
    title: string,
  },
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>,
} ;

export function Content({ selectedGenre, movies }: Props) {
  return (
    <div className="container">
      <Header selectedGenre={selectedGenre}/>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}