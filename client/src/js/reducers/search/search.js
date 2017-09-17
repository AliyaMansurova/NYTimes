import axios from 'axios';
// ------------------- ACTION TYPES ---------------

export const GET_TITLES_SUCCESS= 'GET_TITLES_SUCCESS';
export const GET_TITLES_FAILURE = 'GET_TITLES_FAILURE';
// ------------------ END ACTION TYPES -------------

// ------------------ TYPES -----------------

const defaultState = {
  list: [],
  meta: {
    hits: 0
  },
  error:''
};

// ------------ ACTION CREATORS --------------
export const getTitles = (search, page) => {
  console.log("in action");
  console.log(`page: ${page}, search:${search}`);
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c01b0d2bc5904984b559369be186cf73&page=${page}&q=${search}`;
  return (dispatch) =>
      axios.get(url).then((response) => {
        console.log(response.data.response);
        dispatch({
          type: GET_TITLES_SUCCESS,
          list: response.data.response
        });
      }).catch((error) => {
        dispatch({ type: GET_TITLES_FAILURE, error });
      });
};
// ------------ END ACTION CREATORS --------------

// ------------- REDUCER ----------------

const search = (state= defaultState, action) => {
  switch (action.type) {
    case GET_TITLES_SUCCESS: {
      return {
        list: action.list.docs,
        meta: action.list.meta,
        error: ''
      };
    }
    case GET_TITLES_FAILURE: {
      return {
        error: action.error
      };
    }
    default:
      return state;
  }
};
// ------------- END REDUCER ----------------

export default search;
