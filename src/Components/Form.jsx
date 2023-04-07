/* eslint-disable no-control-regex */
import React, { useState } from "react";
import styles from "../Styles/form.module.css";
import Error from "./Error";
import { useGlobalState } from "../Context/context";
import { actions } from "../Context/reducer";

const Form = () => {
	const { dispatch } = useGlobalState();

	const [formValue, setFormValue] = useState({
		fullname: "",
		email: "",
	});
	const [errorMsg, setErrorMsg] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValue((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const { fullname, email } = formValue;

	const handleSubmit = (event) => {
		event.preventDefault();

		if (fullname.length <= 5) {
			setErrorMsg("**Please verify your information again**");
			return;
		}

		let regex = new RegExp(
			"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
		);

		if (!regex.test(email)) {
			setErrorMsg("Must be a valid email address");
			return;
		}

		dispatch({
			type: actions.SEND_FORM,
			payload: formValue,
		});

		setFormValue({
			fullname: "",
			email: "",
		});
		setErrorMsg("");
	};

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit}>
			<h3>Contact Form</h3>
			{errorMsg !== "" && <Error>{errorMsg}</Error>}
			<input
				type="text"
				name="fullname"
				className={styles.field}
				placeholder="Name"
				onChange={handleChange}
				value={fullname}
				required
			/>
			<input
				type="text"
				name="email"
				className={styles.field}
				placeholder="Email"
				onChange={handleChange}
				value={email}
				required
			/>

			<input
				type="submit"
				value="Send Message"
			/>
		</form>
	);
};

export default Form;
