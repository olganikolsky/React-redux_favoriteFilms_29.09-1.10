import './App.css';
import MovieInput from './components/MovieInput';
import FavoriteMoviesList from './components/RemoveMovie';

function App() {
  return (
    <>
      <h1> Мои избранные фильмы</h1>
      <MovieInput />
      <FavoriteMoviesList />
    </>
  );
}

export default App;
