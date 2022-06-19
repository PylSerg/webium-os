import React, { useEffect } from "react";
import styles from "./Contacts.module.css";

export default function ContactsList({ contacts, viewContact }) {
	return (
		<ul className={styles.list}>
			{contacts.map(contact => (
				<li className={styles.item} key={contact.id} onClick={() => viewContact(contact.id)}>
					{contact.name} {contact.lastName}
				</li>
			))}
		</ul>
	);
}
