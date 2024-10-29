import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import "../styles/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                  alt={`${movie?.original_title} backdrop`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
}

export default Home;
