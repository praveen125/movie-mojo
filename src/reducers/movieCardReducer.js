import {
  GET_MOVIES,
  SET_HASMORE,
  GET_TOTAL,
  SET_SKIP,
  FETCH_MORE,
} from "../actions/types";

const initialState = {
  movies: [],
  skip: 1,
  hasMore: true,
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      console.log("reducer");
      return {
        ...state,
        movies: action.payload.movies,
      };
    case GET_TOTAL:
      return {
        ...state,
        total: action.payload.total,
      };
    case SET_HASMORE:
      return {
        ...state,
        hasMore: false,
      };
    case SET_SKIP:
      return {
        ...state,
        skip: state.skip + 1,
      };
    case FETCH_MORE:
      return {
        ...state,
        movies: state.movies.slice().concat(action.payload),
      };
    default:
      return state;
  }
};
