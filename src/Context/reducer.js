export const actions = {
	SET_THEME: "SET_THEME",
	GET_DATA: "GET_DATA",
	ADD_TO_FAVORITE: "ADD_TO_FAVORITE",
	REMOVE_FROM_FAVORITE: "REMOVE_FROM_FAVORITE",
	SEND_FORM: "SEND_FORM",
};

export const AppReducer = (state, action) => {
	switch (action.type) {
		case actions.SET_THEME:
			const newTheme = state.theme === "light" ? "dark" : "light";
			return {
				...state,
				theme: newTheme,
			};

		case actions.GET_DATA:
			return {
				...state,
				data: action.payload,
			};

		case actions.ADD_TO_FAVORITE:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};

		case actions.REMOVE_FROM_FAVORITE:
			return {
				...state,
				favorites: [
					...state.favorites.filter((favorite) => favorite !== action.payload),
				],
			};

		case actions.SEND_FORM:
			return {
				...state,
				contact: action.payload,
			};

		default:
			return { ...state };
	}
};
