import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommmendation system and suggest some movies for the query : " +
      searchText?.current?.value +
      ". only give me name of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
    }
    const gptMoviesList = gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMoviesList.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames: gptMoviesList,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center ">
      <form
        className="bg-black w-full  md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="py-3 m-4 col-span-9 px-6 md:px-3"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
