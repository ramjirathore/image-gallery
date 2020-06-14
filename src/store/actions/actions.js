import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchStart = () => {
	return {
		type: actionTypes.FETCH_START
	};
};

export const fetchFailed = (error) => {
	return {
		type: actionTypes.FETCH_FAILED,
		error
	};
};

export const setImages = (res) => {
	return {
		type: actionTypes.SET_IMAGES,
		data: res
	};
};

export const fetchImages = (randIds) => {
	return (dispatch) => {
		dispatch(fetchStart());
		const requests = randIds.map((id) =>
			axios.get(`https://picsum.photos/id/${id}/info`)
		);
		let dataArray = [];
		axios
			.all(requests)
			.then(
				axios.spread((...responses) => {
					dataArray = responses.map((el) => el.data);
					dispatch(setImages(dataArray));
				})
			)
			.catch((errors) => {
				dispatch(fetchFailed(errors));
			});
	};
};
