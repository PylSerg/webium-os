import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Contacts.module.css";
import { RiContactsBookLine } from "react-icons/ri";

const defaultForm = {
	photo: "",
	name: "",
	lastName: "",
	tel: "",
	skype: "",
	email: "",
	address: "",
	comment: "",
	view: false,
};

export default function CreateContact({ addContact, closeCreator }) {
	const [createForm, setCreateForm] = useState(defaultForm);

	function changeInputValue(e) {
		setCreateForm({ ...createForm, id: nanoid(), [e.currentTarget.name]: e.currentTarget.value });
	}

	function submitForm(e) {
		e.preventDefault();

		addContact(createForm);

		setCreateForm({
			photo: "",
			name: "",
			lastName: "",
			tel: "",
			skype: "",
			email: "",
			address: "",
			comment: "",
			view: false,
		});

		closeCreator();
	}

	return (
		<div className={styles.createContainer}>
			<form onSubmit={submitForm}>
				<label>
					Name: <input type="text" name="name" value={createForm.value} onChange={changeInputValue} />
				</label>

				<button type="submit"></button>
			</form>
		</div>
	);
}
