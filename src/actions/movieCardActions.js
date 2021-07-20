import {
  GET_MOVIES,
  GET_TOTAL,
  SET_HASMORE,
  SET_SKIP,
  FETCH_MORE,
} from "../actions/types";
import axios from "axios";

//GET MOVIES

export const getMovies = () => async (dispatch) => {
  try {
    await axios
      .get("/movies")
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: GET_MOVIES,
          payload: data,
        });
        console.log(data);
      });
  } catch (err) {
    console.error("err", err);
  }
};

//Fetch More Movies

export const fetchMoreMovies = (skip) => async (dispatch) => {
  try {
    await axios
      .get(`movies?skip=${skip}&limit=16`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: FETCH_MORE,
          payload: data.movies,
        });
      });
  } catch (err) {
    console.log(err);
  }
};
// GET TOTAL

export const getTotal = () => async (dispatch) => {
  try {
    axios
      .get("/movies")
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: GET_TOTAL,
          payload: data,
        });
      });
  } catch (err) {
    console.log("err", err);
  }
};

//SET HAS MORE TO FALSE
export const setHasMore = () => {
  return {
    type: SET_HASMORE,
  };
};

//SET SKIP

export const setSkip = () => {
  return {
    type: SET_SKIP,
  };
};
