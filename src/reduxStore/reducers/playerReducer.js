import * as actionTypes from '../actions/actionTypes';

const initialState = {
	loading: false,
	error: null,
	device_id: null,
	playing: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_DEVICE_ID:
			return {
				...state,
				device_id: action.payload
			};
		case actionTypes.PLAY:
			return {
				...state,
				playing: true
			};
		case actionTypes.PAUSE:
			return {
				...state,
				playing: false
			};
		default:
			return state;
	}
};

export default reducer;
