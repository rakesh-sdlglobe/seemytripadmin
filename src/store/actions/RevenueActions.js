import axios from 'axios';

export const FETCH_REPORT_REQUEST = 'FETCH_REPORT_REQUEST';
export const FETCH_REPORT_SUCCESS = 'FETCH_REPORT_SUCCESS';
export const FETCH_REPORT_FAILURE = 'FETCH_REPORT_FAILURE';

export const fetchReportData = () => async (dispatch) => {
  dispatch({ type: FETCH_REPORT_REQUEST });

  try {
    const response = await axios.get('http://localhost:3002/api/booking/revenue'); 
    dispatch({
      type: FETCH_REPORT_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_REPORT_FAILURE,
      payload: error.message
    });
  }
};
