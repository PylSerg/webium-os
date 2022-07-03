import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import ContactsFilter from "./ContactsFilter";
import AddContact from "./ContactsAdd";
import ContactsList from "./ContactsList";
import ContactView from "./ContactView";
import styles from "./Contacts.module.css";

export default function Contacts() {
	const contacts = useSelector(state => state.contacts.contacts);
	const dispatch = useDispatch();

	const [creator, setCreator] = useState({ visible: false });
	const [editor, setEditor] = useState({ visible: false });
	const [modalDelete, setModalDelete] = useState({ open: false });

	const containerStyles = [styles.container];
	const viewStyles = [styles.contact];

	localStorage.setItem("contacts", JSON.stringify(contacts));

	blockPointerEvents(creator.visible);
	blockPointerEvents(editor.visible);
	blockPointerEvents(modalDelete.open);

	useEffect(() => {
		dispatch(actions.viewContact(contacts[0].id));
	}, []);

	function blockPointerEvents(action) {
		if (action) {
			containerStyles.push(styles.block);
			viewStyles.push(styles.block);
		}
	}

	function clearFilter() {
		dispatch(actions.filterContacts(""));
	}

	function openCreator() {
		setCreator({ visible: true });

		clearFilter();
	}

	function closeCreator() {
		setCreator({ visible: false });
	}

	function openEditor() {
		setEditor({ visible: true });
	}

	function closeEditor() {
		setEditor({ visible: false });
	}

	function openDeleteModal() {
		setModalDelete({ open: true });
	}

	function closeDeleteModal() {
		setModalDelete({ open: false });
	}

	return (
		<div className={containerStyles.join(" ")}>
			<div className={styles.sidebar}>
				<ContactsFilter clearFilter={clearFilter} />

				<AddContact openCreator={openCreator} />

				<ContactsList />
			</div>

			<ContactView
				viewStyles={viewStyles}
				creator={creator}
				editor={editor}
				modalDelete={modalDelete}
				blockPointerEvents={blockPointerEvents}
				closeCreator={closeCreator}
				openEditor={openEditor}
				closeEditor={closeEditor}
				openDeleteModal={openDeleteModal}
				closeDeleteModal={closeDeleteModal}
			/>
		</div>
	);
}
