import React from "react";
import ContactsList from "./ContactsList";
import ContactView from "./ContactView";
import styles from "./Contacts.module.css";

export default function Contacts() {
	return (
		<div className={styles.container}>
			<ContactsList />
			<ContactView />
		</div>
	);
}
