import React, { useState } from "react";
import styles from "./Contacts.module.css";

export default function EditContact({ contact, closeEditor }) {
	const [editForm, setEditForm] = useState(contact);

	function changeInputValue(e) {
		setEditForm({ ...editForm, [e.currentTarget.name]: e.currentTarget.value });
	}

	function submitForm(e) {
		e.preventDefault();
	}

	return (
		<form className={styles.createContainer}>
			<label>
				Name: <br />
				<input type="text" name="name" value={editForm.name} onChange={changeInputValue} required />
			</label>

			<label>
				Last name: <br />
				<input type="text" name="lastName" value={editForm.value} onChange={changeInputValue} />
			</label>

			<label>
				Telephone number: <br />
				<input type="number" name="tel" value={editForm.value} onChange={changeInputValue} />
			</label>

			<label>
				Skype: <br />
				<input type="text" name="skype" value={editForm.value} onChange={changeInputValue} />
			</label>

			<label>
				Email: <br />
				<input type="email" name="email" value={editForm.value} onChange={changeInputValue} />
			</label>

			<label>
				Address: <br />
				<input type="text" name="address" value={editForm.value} onChange={changeInputValue} />
			</label>

			<label>
				Comment: <br />
				<textarea type="text" name="comment" value={editForm.value} onChange={changeInputValue} />
			</label>

			<div className={styles.createButtons}>
				<button type="button" className={styles.createCancelButton} onClick={closeEditor}>
					Cancel
				</button>
				<button type="submit" className={styles.createSaveButton}>
					Save
				</button>
			</div>
		</form>
	);
}
