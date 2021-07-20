import axios from "axios";
import * as types from "../actions/types";

const MOVIES_API = `https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=e0936b38f3d577200421f706a99badd3&page`;

//GET POPULAR MOVIES

export const getTrendingMovies = (skip) => async (dispatch) => {
  try {
    await axios
      .get(`${MOVIES_API}=${skip}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: types.GET_TRENDING_MOVIES,
          payload: data.results,
        });
        console.log(data);
      });
  } catch (err) {
    console.log("err", err);
  }
};

//Fetch More Popular Movies

export const fetchMoreMovies = (skip) => async (dispatch) => {
  try {
    await axios
      .get(`${MOVIES_API}=${skip}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: types.FETCH_MORE,
          payload: data.results,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

//Get Total

export const getTotal = () => async (dispatch) => {
  try {
    axios
      .get(MOVIES_API)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: types.GET_TOTAL_TRENDING,
          payload: data.total_pages,
        });
      });
  } catch (err) {
    console.log("err", err);
  }
};

//Set Skip
export const setSkip = () => {
  return {
    type: types.SET_SKIP,
  };
};

//Set HASMORE

export const setHasMore = () => {
  return {
    type: types.SET_HASMORE,
  };
};
