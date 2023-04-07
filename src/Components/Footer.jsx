import React from "react";
import Logo from "../Assets/DH.png";
import styles from "../Styles/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>Powered by</p>
			<img
				src={Logo}
				width={100}
				height="auto"
				alt="DH-logo"
			/>
		</footer>
	);
};

export default Footer;
