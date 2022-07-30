import sanityAPI from "../sanitySetup";
import {
  POSTS_FETCH_FAIL,
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
} from "../actions/action-types/post-actions";

const fetchAllPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POSTS_FETCH_REQUEST,
    });
    const data = await sanityAPI.fetch(`*[_type == 'post']`);
    dispatch({
      type: POSTS_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_FETCH_FAIL,
      payload: error.message,
    });
  }
};

export { fetchAllPosts };
