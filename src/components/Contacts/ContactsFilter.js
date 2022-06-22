import React from "react";
import styles from "./Contacts.module.css";

export default function ContactsFilter({ filter, filterContacts }) {
	return (
		<label>
			<input type="text" value={filter.value} onChange={filterContacts} placeholder="Search..." />
		</label>
	);
}
