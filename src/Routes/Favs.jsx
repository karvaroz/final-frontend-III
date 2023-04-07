import { useGlobalState } from "../Context/context";
import styles from "../Styles/home.module.css";
import Card from "../Components/Card";

const Favs = () => {
	const { state } = useGlobalState();

	return (
		<section>
			<h1>Favorites</h1>
			<div className={styles.cards}>
				{state?.favorites?.length === 0 ? (
					<h3>No favorites</h3>
				) : (
					state?.favorites?.map((dentist) => (
						<Card
							dentist={dentist}
							key={dentist.id}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default Favs;
