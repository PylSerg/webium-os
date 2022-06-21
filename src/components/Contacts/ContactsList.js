import React, { useEffect } from "react";
import styles from "./Contacts.module.css";

export default function ContactsList({ contacts, viewContact }) {
	return (
		<ul className={styles.list}>
			{contacts.map(contact => (
				<li key={contact.id}>
					{contact.view ? (
						<div className={[styles.item, styles.active].join(" ")} onClick={() => viewContact(contact.id)}>
							{contact.name} {contact.lastName}
						</div>
					) : (
						<div className={styles.item} onClick={() => viewContact(contact.id)}>
							{contact.name} {contact.lastName}
						</div>
					)}
				</li>
			))}
		</ul>
	);
}
