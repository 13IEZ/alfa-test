import ax from '../../settings/axios-dog';
import { FETCH_DOGS_SUCCESS, FETCH_DOGS_FAILURE } from '../actionTypes';

const fetchDogsSuccess = (dogs) => {
	return { type: FETCH_DOGS_SUCCESS, payload: dogs };
};
const fetchDogsFailure = (error) => {
	return { type: FETCH_DOGS_FAILURE, payload: error };
};
export const fetchDogs = () => {
	return async (dispatch) => {
		// const arr = [];
		try {
			const response = await ax.get('/all');
			console.log(response);
			const breeds = [];
			Object.keys(response.data.message)
				.forEach((elem) => {
					console.log(elem);
				})
				// let response = res.data;
				// Object.keys(response.data.message).map((elem) => {
				// 	// elem.response.data.message[elem];
				// 	let dog = { main: elem };
				// 	// dog.poroda = 'sobaka';
				// 	console.log(dog);
				// 	return dog;
				// });
				.console.log(breeds);
			// dispatch(fetchDogsSuccess(response));
		} catch (error) {
			dispatch(fetchDogsFailure(error));
		}
	};
};

// https://dog.ceo/api/breed/maltese/images/random/3
// https://dog.ceo/api/breed/mastiff/bull/images/random/3
// export const fetchCurrProduct = (id) => {
// 	return async (dispatch) => {
// 		try {
// 			const response = await ax.get(`/products/${id}`);
// 			dispatch(fetchProduct(response.data));
// 		} catch (e) {
// 			dispatch(fetchProductsFailure(e));
// 		}
// 	};
// };
