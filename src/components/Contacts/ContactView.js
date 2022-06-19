import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./Contacts.module.css";

export default function ContactsList({ contacts }) {
	return (
		<div className={styles.contact}>
			{contacts.map(
				contact =>
					contact.view && (
						<div key={contact.id}>
							<div className={styles.iconUserBox}>
								<AiOutlineUser className={styles.iconUser} />
							</div>
							<h2 className={styles.userTitle}>
								{contact.name} {contact.lastName}
							</h2>

							<div>
								<h4>Contact info</h4>

								<ul>
									{contact.tel && <li>{contact.tel}</li>}
									{contact.email && <li>{contact.email}</li>}
									{contact.address && <li>{contact.address}</li>}
									{contact.comment && <li>{contact.comment}</li>}
								</ul>
							</div>
						</div>
					)
			)}
		</div>
	);
}
