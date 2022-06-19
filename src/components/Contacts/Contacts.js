import React, { useState } from "react";
import ContactsList from "./ContactsList";
import ContactView from "./ContactView";
import contactsDB from "./contactsDB.json";
import styles from "./Contacts.module.css";

export default function Contacts() {
	const [contacts, setContacts] = useState(contactsDB);

	console.table(contacts);

	function viewContact(contId) {
		setContacts(prevContacts =>
			prevContacts.map(contact => {
				if (contact.id === contId) return { ...contact, view: true };
				return contact;
			})
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<ContactsList contacts={contacts} viewContact={viewContact} />
			</div>
			<ContactView contacts={contacts} />
		</div>
	);
}
