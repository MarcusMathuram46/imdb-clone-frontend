import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import "../styles/MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "./Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      setMovieList(response.data.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} /> // Added key prop for each Card
        ))}
      </div>
    </div>
  );
};

export default MovieList;
