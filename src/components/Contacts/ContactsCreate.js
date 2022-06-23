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
		<div className={styles.createContainer}>
			<form onSubmit={submitForm}>
				<label>
					Name: <input type="text" name="name" value={createForm.value} onChange={changeInputValue} required />
				</label>

				<label>
					Last name: <input type="text" name="lastName" value={createForm.value} onChange={changeInputValue} />
				</label>

				<label>
					Telephone number: <input type="text" name="tel" value={createForm.value} onChange={changeInputValue} />
				</label>

				<label>
					Skype: <input type="text" name="skype" value={createForm.value} onChange={changeInputValue} />
				</label>

				<label>
					Email: <input type="text" name="email" value={createForm.value} onChange={changeInputValue} />
				</label>

				<label>
					Address: <input type="text" name="address" value={createForm.value} onChange={changeInputValue} />
				</label>

				<label>
					Comment: <textarea type="text" name="comment" value={createForm.value} onChange={changeInputValue} />
				</label>

				<div>
					<button type="button" onClick={closeCreator}>
						Cancel
					</button>
					<button type="submit">Save</button>
				</div>
			</form>
		</div>
	);
}
