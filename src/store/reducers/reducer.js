import * as actionTypes from '../actions/actionTypes';

const initialState = {
	imagesData: null,
	loading: true,
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_START:
			return {
				...state,
				loading: true,
				error: null
			};
		case actionTypes.SET_IMAGES:
			return {
				...state,
				imagesData: action.data,
				loading: false,
				error: null
			};
		case actionTypes.FETCH_FAILED:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default reducer;
