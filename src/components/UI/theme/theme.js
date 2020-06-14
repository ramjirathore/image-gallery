import { createMuiTheme } from '@material-ui/core';

const galleryBlue = '#4cbbf5';
const galleryOrange = '#FFBA6F';

export default createMuiTheme({
	palette: {
		common: {
			blue: galleryBlue,
			orange: galleryOrange
		},
		primary: {
			main: galleryOrange
		},
		secondary: {
			main: galleryBlue
		}
	}
});
