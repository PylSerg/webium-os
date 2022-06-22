import React, { useState } from "react";
import ContactsList from "./ContactsList";
import ContactView from "./ContactView";
import contactsDB from "./contactsDB.json";
import styles from "./Contacts.module.css";

export default function Contacts() {
	const [contacts, setContacts] = useState(contactsDB);
	const [filter, setFilter] = useState({ value: "" });

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

	function filterContacts(e) {
		setFilter({ value: e.currentTarget.value });
	}

	const normalizedFilter = filter.value.toLocaleLowerCase();
	const visibleContacts = contacts.filter(
		contact =>
			contact.name.toLocaleLowerCase().includes(normalizedFilter) ||
			contact.lastName.toLocaleLowerCase().includes(normalizedFilter) ||
			contact.tel.toLocaleLowerCase().includes(normalizedFilter) ||
			contact.skype.toLocaleLowerCase().includes(normalizedFilter) ||
			contact.email.toLocaleLowerCase().includes(normalizedFilter) ||
			contact.address.toLocaleLowerCase().includes(normalizedFilter) ||
			contact.comment.toLocaleLowerCase().includes(normalizedFilter)
	);

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<ContactsList contacts={visibleContacts} filter={filter} viewContact={viewContact} filterContacts={filterContacts} />
			</div>
			<ContactView contacts={contacts} onDelete={deleteContact} />
		</div>
	);
}
