import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { fetchImage } from '../../store/actions/dogsAction';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 250,
		padding: 10,
		margin: 10,
	},
	media: {
		height: 0,
		margin: 5,
		paddingTop: '56.25%', // 16:9
	},
	btn: {
		marginLeft: 'auto',
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

const MainElement = ({ dog }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [images, setImages] = useState(null);
	const [loading, setLoading] = useState(false);
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
		setLoading(true);
		dispatch(fetchImage(dog)).then((res) => {
			setImages(res);
			setLoading(false);
		});
	};

	const handleRefreshClick = () => {
		setLoading(true);
		dispatch(fetchImage(dog)).then((res) => {
			setImages(res);
			setLoading(false);
		});
	};

	return (
		<Card className={classes.root}>
			<CardActions disableSpacing>
				<Typography>
					{dog.breed} {dog.type}
				</Typography>
				{!expanded && (
					<Button
						color='primary'
						onClick={handleExpandClick}
						className={classes.btn}
						variant='contained'
						aria-expanded={expanded}>
						Show
					</Button>
				)}
				{expanded && (
					<Button
						disabled={loading}
						color='primary'
						className={classes.btn}
						onClick={handleRefreshClick}
						variant='contained'
						aria-expanded={expanded}>
						Refresh
					</Button>
				)}
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography paragraph>Photo:</Typography>
					<Card>
						{images && images.map((elem, i) => <CardMedia key={elem + i} className={classes.media} image={elem} />)}
					</Card>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default MainElement;
