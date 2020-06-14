import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		marginTop: theme.spacing(5),
		backgroundColor: theme.palette.common.blue,
		padding: theme.spacing(4)
	},
	designer: {
		fontWeight: 700
	}
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant="h6" align="center" gutterBottom>
				Built with ReactJS, Redux and Material-UI
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="textSecondary"
				component="p"
				gutterBottom
			>
				Developed by <span className={classes.designer}>Ramji Rathore</span>
			</Typography>
		</footer>
	);
};

export default Footer;
