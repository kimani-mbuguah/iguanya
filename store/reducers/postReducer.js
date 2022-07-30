import {
  POSTS_FETCH_FAIL,
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_RESET,
} from "../actions/postActions";

const fetchAllPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUEST:
      return {
        loading: true,
      };
    case POSTS_FETCH_SUCCESS:
      return {
        loading: false,
        POSTs: action.payload,
      };
    case POSTS_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case POSTS_FETCH_RESET:
      return {};
    default:
      return state;
  }
};

export { fetchAllPostsReducer };
