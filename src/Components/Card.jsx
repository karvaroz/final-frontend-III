import React from "react";
import styles from "../Styles/card.module.css";
import DocImg from "../Assets/doctor.jpg";
import { Link } from "react-router-dom";
import { useGlobalState } from "../Context/context";
import { actions } from "../Context/reducer";
import Swal from "sweetalert2";

const Card = ({ dentist }) => {
	const { id, name, phone, email } = dentist;
	const { state, dispatch } = useGlobalState();

	const isDentistInFavorites = (newDentist) =>
		state?.favorites?.find((dentist) => dentist.id === newDentist.id);

	const addFav = (dentist) => {
		if (!!isDentistInFavorites(dentist)) {
			Swal.fire({
				text: "Dentist removed from favs!",
				toast: true,
				position: "top-right",
				showConfirmButton: false,
				timer: 1500,
				timerProgressBar: true,
			});
			dispatch({
				type: actions.REMOVE_FROM_FAVORITE,
				payload: dentist,
			});
		} else {
			Swal.fire({
				text: "Dentist added it from to favs!",
				toast: true,
				position: "top-right",
				showConfirmButton: false,
				timer: 1500,
				timerProgressBar: true,
			});
			dispatch({
				type: actions.ADD_TO_FAVORITE,
				payload: dentist,
			});
		}
	};

	return (
		<div className={styles.card}>
			<div className={styles.cover}></div>
			<div className={styles.photo}>
				<img
					src={DocImg}
					alt={name}
				/>
			</div>
			<div className={styles.content}>
				<span>
					<Link to={`/dentist/${id}`}>
						<h2>{name}</h2>
					</Link>

					<button
						onClick={() => addFav(dentist)}
						className={styles.favBtn}>
						<ion-icon name="star-outline"></ion-icon>
					</button>
				</span>

				<h3>{phone}</h3>
				<h3>{email}</h3>
			</div>
		</div>
	);
};

export default Card;
