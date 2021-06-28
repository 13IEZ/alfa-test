import ax from '../../settings/axios-dog';
import { FETCH_DOGS_SUCCESS, FETCH_DOGS_FAILURE, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILURE } from '../actionTypes';

const fetchDogsSuccess = (dogs) => {
	return { type: FETCH_DOGS_SUCCESS, payload: dogs };
};
const fetchDogsFailure = (error) => {
	return { type: FETCH_DOGS_FAILURE, payload: error };
};
export const fetchDogs = () => {
	return async (dispatch) => {
		try {
			const response = await ax.get('/all');

			const breeds = [];

			Object.keys(response.data.message).forEach((breed) => {
				if (response.data.message[breed].length) {
					response.data.message[breed].forEach((type) => {
						breeds.push({ breed, type });
					});
				} else breeds.push({ breed });
			});

			dispatch(fetchDogsSuccess(breeds));
		} catch (error) {
			dispatch(fetchDogsFailure(error));
		}
	};
};

const fetchImageSuccess = () => {
	return { type: FETCH_IMAGE_SUCCESS };
};
const fetchImageFailure = (error) => {
	return { type: FETCH_IMAGE_FAILURE, payload: error };
};
export const fetchImage = (dog) => {
	return async (dispatch) => {
		let response = null;
		try {
			if (dog.type) {
				response = await ax.get(`https://dog.ceo/api/breed/${dog.breed}/${dog.type}/images/random/3`);
				dispatch(fetchImageSuccess());
			} else {
				response = await ax.get(`https://dog.ceo/api/breed/${dog.breed}/images/random/3`);
				dispatch(fetchImageSuccess());
			}
			return response.data.message;
		} catch (error) {
			dispatch(fetchImageFailure(error));
		}
	};
};
