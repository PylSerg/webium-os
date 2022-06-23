import React, { useState } from "react";
import ContactsFilter from "./ContactsFilter";
import AddContact from "./ContactsAdd";
import ContactsList from "./ContactsList";
import ContactView from "./ContactView";
import contactsDB from "./contactsDB.json";
import styles from "./Contacts.module.css";

export default function Contacts() {
	const [contacts, setContacts] = useState(contactsDB);
	const [filter, setFilter] = useState({ value: "" });
	const [creator, setCreator] = useState({ visible: false });

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
	const visibleContacts = contacts
		.filter(
			contact =>
				contact.name.toLocaleLowerCase().includes(normalizedFilter) ||
				contact.lastName.toLocaleLowerCase().includes(normalizedFilter) ||
				contact.tel.includes(normalizedFilter) ||
				contact.skype.toLocaleLowerCase().includes(normalizedFilter) ||
				contact.email.toLocaleLowerCase().split("@")[0].includes(normalizedFilter) ||
				contact.address.toLocaleLowerCase().includes(normalizedFilter)
		)
		.sort((a, b) => (a.name > b.name ? 1 : -1));

	function clearFilter() {
		setFilter({ value: "" });
	}

	function openCreator() {
		setCreator({ visible: true });
	}

	function closeCreator() {
		setCreator({ visible: false });
	}

	function addContact(newContact) {
		setContacts([...contacts, newContact]);
	}

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<ContactsFilter filter={filter} filterContacts={filterContacts} clearFilter={clearFilter} />
				<AddContact openCreator={openCreator} />
				<ContactsList contacts={visibleContacts} filter={filter} normalizedFilter={normalizedFilter} viewContact={viewContact} filterContacts={filterContacts} />
			</div>
			<ContactView contacts={contacts} creator={creator} addContact={addContact} onDelete={deleteContact} closeCreator={closeCreator} />
		</div>
	);
}
