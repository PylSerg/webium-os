import React from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import styles from "./Contacts.module.css";

export default function ContactsFilter({ filter, filterContacts, clearFilter }) {
	return (
		<div className={styles.searchFormContainer}>
			<label>
				<RiDeleteBack2Line className={styles.searchClear} onClick={clearFilter} />
				<input className={styles.searchFormInput} type="text" value={filter.value} onChange={filterContacts} placeholder="Search..." />
			</label>
		</div>
	);
}
