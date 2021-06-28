import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import BreedsList from '../components/BreedsList/BreedsList';
import { fetchDogs } from '../store/actions/dogsAction';

const Breeds = () => {
	const dispatch = useDispatch();
	const dogs = useSelector((state) => state.dogs);

	useEffect(() => {
		dispatch(fetchDogs());
	}, [dispatch]);

	return (
		<main>
			<Grid style={{ marginTop: '5rem' }} container direction='column' spacing={2}>
				<Grid item container direction='row' justify='center'>
					{dogs.map((dog, i) => (
						<BreedsList key={dog.breed + i} dog={dog} />
					))}
				</Grid>
			</Grid>
		</main>
	);
};

export default Breeds;
