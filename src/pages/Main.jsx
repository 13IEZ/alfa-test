import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDogs } from '../store/actions/dogsAction';

const Main = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDogs());
	}, [dispatch]);

	return (
		<main>
			<div>asd</div>
		</main>
	);
};

export default Main;
