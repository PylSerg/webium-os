import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Contacts.module.css";

const defaultForm = {
	photo: "",
	name: "",
	lastName: "",
	tel: "",
	skype: "",
	email: "",
	address: "",
	comment: "",
	view: true,
};

export default function CreateContact({ addContact, closeCreator }) {
	const [createForm, setCreateForm] = useState(defaultForm);

	function changeInputValue(e) {
		setCreateForm({ ...createForm, id: nanoid(), [e.currentTarget.name]: e.currentTarget.value });
	}

	function submitForm(e) {
		e.preventDefault();

		addContact(createForm);

		closeCreator();
	}

	return (
		<form className={styles.createContainer} onSubmit={submitForm}>
			<label>
				Name: <br />
				<input type="text" name="name" value={createForm.name} onChange={changeInputValue} required />
			</label>

			<label>
				Last name: <br />
				<input type="text" name="lastName" value={createForm.lastName} onChange={changeInputValue} />
			</label>

			<label>
				Telephone number: <br />
				<input type="number" name="tel" value={createForm.tel} onChange={changeInputValue} />
			</label>

			<label>
				Skype: <br />
				<input type="text" name="skype" value={createForm.skype} onChange={changeInputValue} />
			</label>

			<label>
				Email: <br />
				<input type="email" name="email" value={createForm.email} onChange={changeInputValue} />
			</label>

			<label>
				Address: <br />
				<input type="text" name="address" value={createForm.address} onChange={changeInputValue} />
			</label>

			<label>
				Comment: <br />
				<textarea type="text" name="comment" value={createForm.comment} onChange={changeInputValue} />
			</label>

			<div className={styles.createButtons}>
				<button type="button" className={styles.createCancelButton} onClick={closeCreator}>
					Cancel
				</button>
				<button type="submit" className={styles.createSaveButton}>
					Save
				</button>
			</div>
		</form>
	);
}
