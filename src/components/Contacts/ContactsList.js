import React, { useState } from "react";
import styles from "./Contacts.module.css";

export default function ContactsList({ contacts, filter, viewContact, filterContacts }) {
	return (
		<div>
			<label>
				<input type="text" value={filter.value} onChange={filterContacts} placeholder="Search..." />
			</label>

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
		</div>
	);
}
