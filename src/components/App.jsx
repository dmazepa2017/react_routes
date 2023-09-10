import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import MoviesSearchPage from "pages/MoviesSearchPage";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Layoyt from "./Layout";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layoyt />}>
          <Route index element={<HomePage />}/>
          <Route path="/movies" element={<MoviesSearchPage />}/>
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<HomePage />}/>
      </Routes>
    </div>
  );
};
