import { FETCH_DOGS_FAILURE, FETCH_DOGS_SUCCESS } from '../actionTypes';

const initialState = {
	dogs: [],
	fetchError: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DOGS_FAILURE:
			return { ...state, fetchError: action.payload };
		case FETCH_DOGS_SUCCESS:
			return { ...state, fetchError: null, dogs: action.payload };
		default:
			return state;
	}
};

export default reducer;
