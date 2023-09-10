import { Route, Routes, Link } from "react-router-dom";
import HomePage from "pages/HomePage";
import MoviesSearchPage from "pages/MoviesSearchPage";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";


export const App = () => {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movies" element={<MoviesSearchPage />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
      </Routes>
    </div>
  );
};
