import axios from 'axios';

export const FETCH_RECENT_USERS_REQUEST = 'FETCH_RECENT_USERS_REQUEST';
export const FETCH_RECENT_USERS_SUCCESS = 'FETCH_RECENT_USERS_SUCCESS';
export const FETCH_RECENT_USERS_FAILURE = 'FETCH_RECENT_USERS_FAILURE';

export const fetchRecentUsers = () => async (dispatch) => {
    dispatch({ type: FETCH_RECENT_USERS_REQUEST });

    try {
        const response = await axios.get('http://localhost:3002/api/users/getUsers');
        dispatch({
            type: FETCH_RECENT_USERS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_RECENT_USERS_FAILURE,
            payload: error.message
        });
    }
};
