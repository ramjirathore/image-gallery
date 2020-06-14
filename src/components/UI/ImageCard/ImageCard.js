import React from 'react';
import axios from 'axios';
import {
	makeStyles,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Grid,
	Button
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import CameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down('xs')]: {
			borderRadius: 0
		}
	},
	media: {
		paddingTop: '56.25%'
	},
	cameraAvatar: {
		paddingRight: 5,
		paddingBottom: 1
	}
}));

const ImageCard = (props) => {
	const classes = useStyles();
	const { title, imageUrl } = props;

	function downloadImage() {
		axios({
			url: imageUrl,
			method: 'GET',
			responseType: 'blob'
		}).then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'image.jpg');
			document.body.appendChild(link);
			link.click();
		});
	}

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={imageUrl} />
			<CardContent>
				<Grid container justify="space-between">
					<Grid item>
						<Grid container justify="flex-start" alignItems="flex-end">
							<Grid item>
								<CameraIcon className={classes.cameraAvatar} fontSize="small" />
							</Grid>
							<Grid item>
								<Typography variant="h6">{title}</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Button color="secondary" onClick={downloadImage}>
							<GetAppIcon />
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default ImageCard;
