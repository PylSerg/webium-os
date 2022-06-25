import React, { useState, useEffect } from "react";
import ContactsFilter from "./ContactsFilter";
import AddContact from "./ContactsAdd";
import ContactsList from "./ContactsList";
import ContactView from "./ContactView";
import contactsDB from "./contactsDB.json";
import styles from "./Contacts.module.css";

function defaultContacts() {
	if (!localStorage.getItem("contacts")) return contactsDB;

	return JSON.parse(localStorage.getItem("contacts"));
}

export default function Contacts() {
	const [contacts, setContacts] = useState(() => defaultContacts());
	const [filter, setFilter] = useState({ value: "" });
	const [creator, setCreator] = useState({ visible: false });
	const [modalDelete, setModalDelete] = useState({ open: false });

	const containerStyles = [styles.container];

	localStorage.setItem("contacts", JSON.stringify(contacts));

	blockPointerEvents(creator.visible);
	blockPointerEvents(modalDelete.open);

	useEffect(() => {
		viewContact(contacts[0].id);
	}, []);

	function blockPointerEvents(action) {
		if (action) containerStyles.push(styles.block);
	}

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

	useEffect(() => {
		if (visibleContacts.length > 0) viewContact(visibleContacts[0].id);
		return;
	}, [filter]);

	function clearFilter() {
		setFilter({ value: "" });
	}

	function openCreator() {
		setCreator({ visible: true });

		clearFilter();
	}

	function closeCreator() {
		setCreator({ visible: false });
	}

	function addContact(newContact) {
		setContacts([...contacts, newContact]);
		viewContact(newContact.id);
	}

	function openModal() {
		setModalDelete({ open: true });
	}

	function closeModal() {
		setModalDelete({ open: false });
	}

	return (
		<div className={containerStyles.join(" ")}>
			<div className={styles.sidebar}>
				<ContactsFilter filter={filter} filterContacts={filterContacts} clearFilter={clearFilter} />
				<AddContact openCreator={openCreator} />
				<ContactsList contacts={visibleContacts} filter={filter} normalizedFilter={normalizedFilter} viewContact={viewContact} filterContacts={filterContacts} />
			</div>
			<ContactView
				contacts={contacts}
				creator={creator}
				modalDelete={modalDelete}
				blockPointerEvents={blockPointerEvents}
				addContact={addContact}
				deleteContact={deleteContact}
				closeCreator={closeCreator}
				openModal={openModal}
				closeModal={closeModal}
			/>
		</div>
	);
}
