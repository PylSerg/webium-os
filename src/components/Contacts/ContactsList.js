import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import styles from "./Contacts.module.scss";

export default function ContactsList() {
	const contacts = useSelector((state) => state.contacts.contacts);
	const filter = useSelector((state) => state.contacts.filter);
	const dispatch = useDispatch();

	const normalizedFilter = filter.toLocaleLowerCase();
	const visibleContacts = contacts
		.filter(
			(contact) =>
				contact.name.toLocaleLowerCase().includes(normalizedFilter) ||
				contact.lastName.toLocaleLowerCase().includes(normalizedFilter) ||
				contact.tel.includes(normalizedFilter) ||
				contact.skype.toLocaleLowerCase().includes(normalizedFilter) ||
				contact.email.toLocaleLowerCase().split("@")[0].includes(normalizedFilter) ||
				contact.address.toLocaleLowerCase().includes(normalizedFilter),
		)
		.sort((a, b) => (a.name > b.name ? 1 : -1));

	useEffect(() => {
		if (visibleContacts.length > 0) dispatch(actions.viewContact(visibleContacts[0].id));
		return;
	}, [filter]);

	return (
		<ul className={styles.list}>
			{visibleContacts.map((contact) => (
				<li key={contact.id}>
					{contact.view ? (
						<div className={[styles.item, styles.active].join(" ")} onClick={() => dispatch(actions.viewContact(contact.id))}>
							{contact.name} {contact.lastName}
							{filter && contact.tel.includes(filter) && <p className={styles.searchTip}>{contact.tel}</p>}
							{filter && contact.skype.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.skype}</p>}
							{filter && contact.email.toLocaleLowerCase().split("@")[0].includes(normalizedFilter) && <p className={styles.searchTip}>{contact.email}</p>}
							{filter && contact.address.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.address}</p>}
						</div>
					) : (
						<div className={styles.item} onClick={() => dispatch(actions.viewContact(contact.id))}>
							{contact.name} {contact.lastName}
							{filter && contact.tel.includes(filter) && <p className={styles.searchTip}>{contact.tel}</p>}
							{filter && contact.skype.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.skype}</p>}
							{filter && contact.email.toLocaleLowerCase().split("@")[0].includes(normalizedFilter) && <p className={styles.searchTip}>{contact.email}</p>}
							{filter && contact.address.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.address}</p>}
						</div>
					)}
				</li>
			))}
		</ul>
	);
}
