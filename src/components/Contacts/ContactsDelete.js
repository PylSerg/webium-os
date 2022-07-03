import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import styles from "./Contacts.module.css";

export default function DeleteContact({ contact, closeDeleteModal }) {
	const dispatch = useDispatch();

	function deleteAndClose(contId) {
		dispatch(actions.deleteContact(contId));
		closeDeleteModal();
	}

	return (
		<div className={styles.modalContainer}>
			<div className={styles.modalHeader}>Delete contact</div>
			<div>
				<p className={styles.modalText}>
					Are you sure want delete{" "}
					<b>
						{contact.name} {contact.lastName}
					</b>{" "}
					from contact list?
				</p>
				<button className={styles.cancelButton} type="button" onClick={closeDeleteModal}>
					Cancel
				</button>
				<button className={styles.deleteButton} type="button" onClick={() => deleteAndClose(contact.id)}>
					Delete
				</button>
			</div>
		</div>
	);
}
