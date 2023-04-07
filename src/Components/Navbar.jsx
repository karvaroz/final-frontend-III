import styles from "../Styles/navbar.module.css";
import { Link } from "react-router-dom";
import { useGlobalState } from "../Context/context";
import { actions } from "../Context/reducer";

const Navbar = () => {
	const { dispatch } = useGlobalState();

	const handleThemeChange = () => {
		dispatch({
			type: actions.SET_THEME,
		});
	};

	return (
		<nav className={styles.navbar}>
			<ul className={styles.ul}>
				<li>
					<Link
						to="/"
						className={styles.a}>
						Dentist
					</Link>
				</li>
				<li>
					<Link
						to="/"
						className={styles.a}>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/favs"
						className={styles.a}>
						Favs
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						className={styles.a}>
						Contact
					</Link>
				</li>
			</ul>
			<button
				className={styles.button}
				onClick={handleThemeChange}>
				<ion-icon name="contrast-outline"></ion-icon>
			</button>
		</nav>
	);
};

export default Navbar;
