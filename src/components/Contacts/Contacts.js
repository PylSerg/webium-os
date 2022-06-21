import React, { useState } from "react";
import ContactsList from "./ContactsList";
import ContactView from "./ContactView";
import contactsDB from "./contactsDB.json";
import styles from "./Contacts.module.css";

export default function Contacts() {
	const [contacts, setContacts] = useState(contactsDB);

	function deleteContact(contactId) {
		setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
	}

	function viewContact(contId) {
		setContacts(prevContacts =>
			prevContacts.map(contact => {
				if (contact.view && contact.id !== contId) return { ...contact, view: false };
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
			<ContactView contacts={contacts} onDelete={deleteContact} />
		</div>
	);
}
