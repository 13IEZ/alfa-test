import { FETCH_DOGS_FAILURE, FETCH_DOGS_SUCCESS, FETCH_IMAGE_FAILURE, FETCH_IMAGE_SUCCESS } from '../actionTypes';

const initialState = {
	dogs: [],
	fetchDogsError: null,
	fetchImageError: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DOGS_FAILURE:
			return { ...state, fetchDogsError: action.payload };
		case FETCH_DOGS_SUCCESS:
			return { ...state, fetchDogsError: null, dogs: action.payload };
		case FETCH_IMAGE_SUCCESS:
			return { ...state, fetchImageError: null };
		case FETCH_IMAGE_FAILURE:
			return { ...state, fetchImageError: action.payload };
		default:
			return state;
	}
};

export default reducer;
