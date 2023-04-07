import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextGlobal } from "./Context/context";

function App() {
	const { state } = useContext(ContextGlobal);
	return (
		<main className={state.theme === "dark" ? "dark" : null}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/dentist/:id"
						element={<Detail />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/favs"
						element={<Favs />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	);
}

export default App;
