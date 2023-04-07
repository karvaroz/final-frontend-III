import React, { useEffect, useState } from "react";
import styles from "../Styles/detail.module.css";
import { useParams } from "react-router-dom";
import Photo from "../Assets/doctor.jpg";
import axios from "axios";
import { BASE_URL } from "../Context/context";

const Detail = () => {
	let { id } = useParams();
	const [dentist, setDentist] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			await axios.get(`${BASE_URL}/${id}`).then((response) => {
				setDentist(response.data);
			});
		};
		fetchData();
	}, [id]);

	return (
		<section>
			<h1>Details</h1>
			<div className={styles.product}>
				<header>
					<h2>{dentist?.name}</h2>
				</header>

				<article className={styles.common}>
					<img
						src={Photo}
						alt={dentist?.name}
						width="250"
						height="250"
					/>
				</article>

				<article className={styles.common}>
					<h3 className={styles.details}>Dentist details</h3>
					<ul>
						<li>Email: {dentist?.email}</li>
						<li>Phone: {dentist?.phone}</li>
						<li>Website: {dentist?.website}</li>
						<li>Company: {dentist?.company?.name}</li>
						<li>City: {dentist?.address?.city}</li>
					</ul>
				</article>
			</div>
			)
		</section>
	);
};

export default Detail;
