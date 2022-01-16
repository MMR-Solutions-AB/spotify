import * as actionTypes from './actionTypes';

export const addDevice = (device_id) => {
	return { type: actionTypes.ADD_DEVICE_ID, payload: device_id };
};

export const play = () => {
	return { type: actionTypes.PLAY };
};

export const pause = () => {
	return { type: actionTypes.PAUSE };
};
