import * as actionTypes from './actionTypes';
import { getAccessToken } from '../../login-to-spotify';

export const fetchTokenStart = () => {
	return { type: actionTypes.AUTH_START };
};

export const fetchTokenFail = (error) => {
	return { type: actionTypes.AUTH_FAIL, payload: error };
};

export const fetchTokenSuccess = (data) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		payload: data
	};
};

export const fetchToken = () => {
	return async (dispatch) => {
		dispatch(fetchTokenStart());
		try {
			const token = getAccessToken();
			dispatch(fetchTokenSuccess(token));
		} catch (error) {
			dispatch(fetchTokenFail(error));
		}
	};
};
