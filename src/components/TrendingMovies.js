import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getTrendingMovies,
  setHasMore,
  setSkip,
  fetchMoreMovies,
  getTotal,
} from "../actions/TrendingMovieActions";

function TrendingMovies({
  trendingMovies: { trendingMovies, skip, hasMore, total },
  getTrendingMovies,
  fetchMoreMovies,
  setHasMore,
  setSkip,
  getTotal,
}) {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    getTrendingMovies(skip);
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
    if (trendingMovies.length >= total) {
      setHasMore();
    } else {
      setTimeout(() => {
        fetchMoreMovies(skip);
        setSkip();
      }, 1000);
    }
  };

  const endMessage = (
    <Fragment>
      <div className="end-message">
        <span className="want-more">Want To see </span>
      </div>

      <div className="end-buttons">
        <div>
          <Link to="/videos" className="videos" type="button">
            <span className="btn-1">Videos</span>
          </Link>
        </div>
        <div>
          <Link to="/entertainment" type="button">
            <span className="btn">Entertainment</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );

  return (
    <InfiniteScroll
      dataLength={trendingMovies.length}
      next={loadMore}
      hasMore={hasMore}
      loader={loader}
      scrollThreshold="100px"
      endMessage={endMessage}
    >
      <div className="container1">
        {trendingMovies.map((movie, i) => {
          const { title, overview, genre, released, vote_average } = movie;
          return (
            <div className="card1" key={movie._id}>
              <div className="imgBx1">
                <img
                  src={IMG_API + movie.poster_path}
                  height="400px"
                  width="300px"
                  alt={title}
                />
              </div>
              <div className="content1">
                <div className="contentBx1">
                  <h4>{title}</h4>
                  <span className="glow rel">{released}</span>
                  <div>
                    <span className="glow rel">{genre}</span>
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
                      <span>{overview && overview.substr(0, 130)}</span>
                    </div>
                    <div className="glow">
                      <span>
                        <strong>Rating: </strong>
                      </span>
                      {vote_average === 0 ? "no rating" : vote_average}

                      <AiIcons.AiFillStar style={{ color: "yellow" }} />
                    </div>
                    <div className="container2">
                      <div type="button" className="button2">
                        Show more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}
const mapStateToProps = (state) => ({
  trendingMovies: state.trendingMovies,
});

export default connect(mapStateToProps, {
  getTrendingMovies,
  fetchMoreMovies,
  setHasMore,
  setSkip,
  getTotal,
})(TrendingMovies);
