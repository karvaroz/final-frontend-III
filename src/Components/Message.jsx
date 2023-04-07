import React from "react";
import styles from "../Styles/message.module.css";

const Message = ({ children }) => {
	return (
		<div className={styles.msg}>
			<ion-icon name="checkmark-circle-outline"></ion-icon>
			{children}
		</div>
	);
};

export default Message;
