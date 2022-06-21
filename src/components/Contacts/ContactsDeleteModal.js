import React from "react";
import styles from "./Contacts.module.css";

export default function DeleteModal({ contact, onClose, onDelete }) {
	function deleteAndClose(contId) {
		onDelete(contId);
		onClose();
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
				<button className={styles.cancelButton} type="button" onClick={onClose}>
					Cancel
				</button>
				<button className={styles.deleteButton} type="button" onClick={() => deleteAndClose(contact.id)}>
					Delete
				</button>
			</div>
		</div>
	);
}
