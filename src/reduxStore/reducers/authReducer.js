import * as actionTypes from '../actions/actionTypes';

const initialState = {
	error: null,
	token: null,
	loading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return {
				...state,
				error: null,
				loading: true
			};
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				error: null,
				loading: false,
				token: action.payload
			};
		case actionTypes.AUTH_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};

export default reducer;
