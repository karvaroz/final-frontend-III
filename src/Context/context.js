import { createContext, useContext, useEffect, useReducer } from "react";
import { AppReducer, actions } from "./reducer";
import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const init = {
	theme: "light",
	data: [],
	favorites: [],
	contact: [],
};

const initialState = JSON.parse(localStorage.getItem("APP_STATE")) || init;

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const fetchData = async () => {
		await axios.get(BASE_URL).then((response) => {
			dispatch({
				type: actions.GET_DATA,
				payload: response.data,
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const value = {
		state,
		dispatch,
	};

	useEffect(() => {
		localStorage.setItem("APP_STATE", JSON.stringify(state));
	}, [state]);

	return (
		<ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
	);
};

export const useGlobalState = () => useContext(ContextGlobal);
