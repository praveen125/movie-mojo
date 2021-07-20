import * as types from "../actions/types";

const initialState = {
  trendingMovies: [{}],
  skip: 50,
  total: 0,
  hasMore: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload,
      };
    case types.FETCH_MORE:
      return {
        ...state,
        trendingMovies: state.trendingMovies.slice().concat(action.payload),
      };
    case types.GET_TOTAL_TRENDING:
      return {
        ...state,
        total: action.payload,
      };
    case types.SET_SKIP:
      return {
        ...state,
        skip: state.skip + 1,
      };
    case types.SET_HASMORE:
      return {
        ...state,
        hasMore: false,
      };

    default:
      return state;
  }
};
