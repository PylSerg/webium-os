import React, { useState } from "react";
import styles from "./Contacts.module.css";

export default function ContactsList({ contacts, filter, normalizedFilter, viewContact }) {
	return (
		<ul className={styles.list}>
			{contacts.map(contact => (
				<li key={contact.id}>
					{contact.view ? (
						<div className={[styles.item, styles.active].join(" ")} onClick={() => viewContact(contact.id)}>
							{contact.name} {contact.lastName}
							{filter.value && contact.tel.includes(filter.value) && <p className={styles.searchTip}>{contact.tel}</p>}
							{filter.value && contact.skype.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.skype}</p>}
							{filter.value && contact.email.toLocaleLowerCase().split("@")[0].includes(normalizedFilter) && <p className={styles.searchTip}>{contact.email}</p>}
							{filter.value && contact.address.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.address}</p>}
						</div>
					) : (
						<div className={styles.item} onClick={() => viewContact(contact.id)}>
							{contact.name} {contact.lastName}
							{filter.value && contact.tel.includes(filter.value) && <p className={styles.searchTip}>{contact.tel}</p>}
							{filter.value && contact.skype.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.skype}</p>}
							{filter.value && contact.email.toLocaleLowerCase().split("@")[0].includes(normalizedFilter) && <p className={styles.searchTip}>{contact.email}</p>}
							{filter.value && contact.address.toLocaleLowerCase().includes(normalizedFilter) && <p className={styles.searchTip}>{contact.address}</p>}
						</div>
					)}
				</li>
			))}
		</ul>
	);
}
