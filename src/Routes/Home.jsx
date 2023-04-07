import React from "react";
import { useGlobalState } from "../Context/context";
import Card from "../Components/Card";
import styles from "../Styles/home.module.css";

const Home = () => {
	const { state } = useGlobalState();

	return (
		<section className={styles.main}>
			<h1>Home</h1>
			<div className={styles.cards}>
				{state?.data?.lenght === 0 ? (
					<h3>Loading...</h3>
				) : (
					state?.data?.map((dentist) => (
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

export default Home;
