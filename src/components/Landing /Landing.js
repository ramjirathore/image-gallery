import React, { useEffect } from 'react';
import { Grid, makeStyles, Container } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { connect } from 'react-redux';

import ImageCard from '../UI/ImageCard/ImageCard';
import Hero from './Hero/Hero';
import Spinner from '../UI/Spinner/Spinner';

import * as actions from '../../store/actions/actions';

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(6)
	},
	spinner: {
		paddingTop: '7em'
	}
}));

const Landing = (props) => {
	const classes = useStyles();
	useEffect(() => {
		props.onFetchImages(props.IDs);
	}, [props.IDs]);

	const error = (
		<Alert severity="error">
			<AlertTitle>Error</AlertTitle>
			The data couldn't be fetched. <strong>Please Reload!</strong>
		</Alert>
	);

	let imagesContainer = (
		<Grid container justify="center">
			<Grid item className={classes.spinner}>
				<Spinner />
			</Grid>
		</Grid>
	);

	if (!props.isLoading) {
		imagesContainer = (
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={4}>
					{props.images.map((image) => (
						<Grid key={image.id} item xs={12} sm={6} md={4}>
							<ImageCard title={image.author} imageUrl={image.download_url} />
						</Grid>
					))}
				</Grid>
			</Container>
		);
	}

	return (
		<React.Fragment>
			<Hero idData={props.ids} />
			{props.err == null ? imagesContainer : error}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		ids: state.ids,
		images: state.imagesData,
		isLoading: state.loading,
		err: state.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchImages: (ids) => dispatch(actions.fetchImages(ids))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
