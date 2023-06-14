import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import styles from "./Contacts.module.scss";

export default function EditContact({ contact, closeEditor }) {
	const [editForm, setEditForm] = useState(contact);

	const dispatch = useDispatch();

	function changeInputValue(e) {
		setEditForm({ ...editForm, [e.currentTarget.name]: e.currentTarget.value });
	}

	function submitForm(e) {
		e.preventDefault();

		dispatch(actions.editContact(contact.id, editForm));
		closeEditor();
	}

	return (
		<form className={styles.createContainer} onSubmit={submitForm}>
			<label>
				Name: <br />
				<input type='text' name='name' value={editForm.name} onChange={changeInputValue} required />
			</label>

			<label>
				Last name: <br />
				<input type='text' name='lastName' value={editForm.lastName} onChange={changeInputValue} />
			</label>

			<label>
				Telephone number: <br />
				<input type='number' name='tel' value={editForm.tel} onChange={changeInputValue} />
			</label>

			<label>
				Skype: <br />
				<input type='text' name='skype' value={editForm.skype} onChange={changeInputValue} />
			</label>

			<label>
				Email: <br />
				<input type='email' name='email' value={editForm.email} onChange={changeInputValue} />
			</label>

			<label>
				Address: <br />
				<input type='text' name='address' value={editForm.address} onChange={changeInputValue} />
			</label>

			<label>
				Comment: <br />
				<textarea type='text' name='comment' value={editForm.comment} onChange={changeInputValue} />
			</label>

			<div className={styles.createButtons}>
				<button type='button' className={styles.createCancelButton} onClick={closeEditor}>
					Cancel
				</button>
				<button type='submit' className={styles.createSaveButton}>
					Save
				</button>
			</div>
		</form>
	);
}
