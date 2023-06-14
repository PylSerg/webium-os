import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { RiDeleteBack2Line } from "react-icons/ri";
import styles from "./Contacts.module.scss";

export default function ContactsFilter({ clearFilter }) {
	const filter = useSelector((state) => state.contacts.filter);
	const dispatch = useDispatch();

	function filterContacts(e) {
		dispatch(actions.filterContacts(e.currentTarget.value));
	}

	return (
		<div className={styles.searchFormContainer}>
			<label>
				<RiDeleteBack2Line className={styles.searchClear} onClick={clearFilter} />
				<input className={styles.searchFormInput} type='text' value={filter} onChange={filterContacts} placeholder='Search...' />
			</label>
		</div>
	);
}
