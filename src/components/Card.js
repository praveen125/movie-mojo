import axios from "axios";
import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getMovies,
  setHasMore,
  setSkip,
  fetchMoreMovies,
  getTotal,
} from "../actions/movieCardActions";

function Card({
  movie: { movies, total, hasMore, skip },
  getMovies,
  getTotal,
  setHasMore,
  setSkip,
  fetchMoreMovies,
}) {
  useEffect(() => {
    getMovies();
    getTotal();
  }, []);

  const loader = (
    <div>
      <img
        className="spinner"
        src="https://res.cloudinary.com/drenxtuen/image/upload/v1623273805/HAL/spinners/Spinner-1s-124px_a825qt.svg"
        alt="loading..."
      />
    </div>
  );

  const loadMore = () => {
    if (movies.length >= total) {
      setHasMore();
    } else {
      setTimeout(() => {
        fetchMoreMovies(skip);
        setSkip();
      }, 1000);
    }
  };

  const endMessage = (
    <div className="pt-3">
      <span>Want To see </span>
      <Link className="btn btn-danger" to="/videos" type="button">
        Videos
      </Link>{" "}
      <Link className="btn btn-danger" to="/entertainment" type="button">
        Entertainment
      </Link>
    </div>
  );
  // console.log(movies);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMore}
      hasMore={hasMore}
      loader={loader}
      scrollThreshold="100px"
      endMessage={endMessage}
    >
      <div className="container1">
        {movies.map((movie, i) => (
          <div className="card1" key={movie._id}>
            <div className="imgBx1">
              <img
                src={movie.image}
                height="400px"
                width="300px"
                alt={movie.title}
              />
            </div>
            <div className="content1">
              <div className="contentBx1">
                <h4>{movie.title}</h4>
                <div>
                  <span>{movie.genre}</span>
                </div>
                <hr
                  style={{
                    width: "75%",
                    margin: "auto",
                    border: "1.5px solid cyan",
                  }}
                />
                <div className="color">
                  <div className="glow">
                    <span>
                      <strong>Director: </strong>
                    </span>
                    {movie.director}
                  </div>
                  <div className="glow">
                    <span>
                      <strong>Artists: </strong>
                    </span>
                    {/* {movie.artists.map((artist) => artist.name).join(", ")}{" "} */}
                  </div>
                  <div className="glow">
                    <span>
                      <strong>Rating: </strong>
                    </span>
                    {movie.rating}
                    <AiIcons.AiFillStar style={{ color: "yellow" }} />
                  </div>
                  <div className="container2">
                    <div type="button" className="button2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieCard,
});

export default connect(mapStateToProps, {
  getMovies,
  getTotal,
  setHasMore,
  setSkip,
  fetchMoreMovies,
})(Card);
