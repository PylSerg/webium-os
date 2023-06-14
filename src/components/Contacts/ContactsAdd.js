import React from "react";
import styles from "./Contacts.module.scss";

export default function AddContact({ openCreator }) {
	return (
		<button className={styles.addButton} type='button' onClick={openCreator}>
			<b>+</b> Add contact
		</button>
	);
}
