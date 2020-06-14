import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';

import Header from './components/Header/Header';

import theme from './components/UI/theme/theme';
import Landing from './components/Landing /Landing';
import Footer from './components/Footer/Footer';

/** This function has been reused in hero block */
function randomIDs() {
	return Array.from({ length: 4 }, () => Math.floor(Math.random() * 900));
}

const App = () => {
	const IDdata = randomIDs();
	return (
		<ThemeProvider theme={theme}>
			<Grid container direction="column">
				<Grid item>
					<Header />
				</Grid>
				<Grid item>
					<Landing IDs={IDdata} />
				</Grid>
				<Grid item>
					<Footer />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
