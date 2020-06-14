import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	useScrollTrigger
} from '@material-ui/core';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
const useStyles = makeStyles((theme) => ({
	appBar: {
		background: theme.palette.common.blue
	},
	headerIcon: {
		marginRight: theme.spacing(1)
	},
	companyName: {
		fontSize: '1.4rem',
		fontWeight: 500,
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem'
		}
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '2em',
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1em'
		}
	}
}));

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

const Header = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar className={classes.appBar} position="fixed">
					<Toolbar>
						<PhotoLibraryOutlinedIcon className={classes.headerIcon} />
						<Typography className={classes.companyName} variant="h6">
							Image Gallery
						</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default Header;
