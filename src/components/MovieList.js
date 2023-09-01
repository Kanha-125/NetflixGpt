import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies) return;
  return (
    <div className="px-5">
      <h1 className="py-2 text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;