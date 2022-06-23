import React from "react";
import styles from "./Contacts.module.css";

export default function AddContact({ openCreator }) {
	return (
		<button className={styles.addbutton} type="button" onClick={openCreator}>
			<b>+</b> Add contact
		</button>
	);
}
