import React from 'react';
import { Grid, Button, Container, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import * as actions from '../../../store/actions/actions';

const useStyles = makeStyles((theme) => ({
	heroButtons: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2)
	}
}));

function idArray() {
	return Array.from({ length: 4 }, () => Math.floor(Math.random() * 900));
}

const Hero = (props) => {
	const classes = useStyles();

	function flushData() {
		props.onFetchImages(idArray());
	}

	return (
		<div>
			<Container maxWidth="md">
				<div className={classes.heroButtons}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button
								onClick={flushData}
								variant="contained"
								color="primary"
								endIcon={<AutorenewIcon />}
							>
								New Images
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchImages: (ids) => dispatch(actions.fetchImages(ids))
	};
};

export default connect(null, mapDispatchToProps)(Hero);
