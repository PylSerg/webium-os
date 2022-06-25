import React, { useState } from "react";
import EditContact from "./ContactsEdit";
import DeleteContact from "./ContactsDelete";
import CreateContact from "./ContactsCreate";
import { AiOutlineUser } from "react-icons/ai";
import { RiPhoneFill, RiSkypeFill, RiMailFill, RiPhoneLine, RiSkypeLine, RiMailLine, RiCommunityLine, RiFileTextLine, RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import styles from "./Contacts.module.css";

export default function ContactView({
	viewStyles,
	contacts,
	creator,
	editor,
	modalDelete,
	openEditor,
	closeEditor,
	openDeleteModal,
	closeDeleteModal,
	addContact,
	editContact,
	deleteContact,
	closeCreator,
}) {
	const forTel = "tel:";
	const forSkype = "skype:";
	const forMail = "mailto:";

	return (
		<div className={viewStyles.join(" ")}>
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

							<ul className={styles.connectionBar}>
								{contact.tel && (
									<li>
										<a href={[forTel, contact.tel].join("")} className={styles.connectionElement}>
											<RiPhoneFill className={styles.connectionIcon} />
											<span>Call</span>
										</a>
									</li>
								)}

								{contact.skype && (
									<li>
										<a href={[forSkype, contact.skype].join("")} className={styles.connectionElement}>
											<RiSkypeFill className={styles.connectionIcon} />
											<span>Skype</span>
										</a>
									</li>
								)}

								{contact.email && (
									<li>
										<a href={[forMail, contact.email].join("")} className={styles.connectionElement}>
											<RiMailFill className={styles.connectionIcon} />
											<span>Email</span>
										</a>
									</li>
								)}
							</ul>

							<div className={styles.contactInfo}>
								<h4 className={styles.infoTitle}>Contact info</h4>

								<ul className={styles.infoList}>
									{contact.tel && (
										<li className={styles.infoItem}>
											<RiPhoneLine className={styles.infoIcon} />
											{contact.tel}
										</li>
									)}
									{contact.skype && (
										<li className={styles.infoItem}>
											<RiSkypeLine className={styles.infoIcon} />
											{contact.skype}
										</li>
									)}
									{contact.email && (
										<li className={styles.infoItem}>
											<RiMailLine className={styles.infoIcon} />
											{contact.email}
										</li>
									)}
									{contact.address && (
										<li className={styles.infoItem}>
											<RiCommunityLine className={styles.infoIcon} />
											{contact.address}
										</li>
									)}
									{contact.comment && (
										<li className={[styles.infoItem, styles.comment].join(" ")}>
											<RiFileTextLine className={styles.infoIcon} />
											{contact.comment}
										</li>
									)}
								</ul>
							</div>

							<div className={styles.control}>
								<button type="button" className={styles.edit} onClick={() => openEditor(contact.id)} title="Edit">
									<RiEditLine className={styles.editIcon} />
								</button>

								<button type="button" className={styles.delete} onClick={() => openDeleteModal(contact.id)} title="Delete">
									<RiDeleteBinLine className={styles.deleteIcon} />
								</button>
							</div>

							{editor.visible && <EditContact contact={contact} editContact={editContact} closeEditor={closeEditor} />}

							{modalDelete.open && <DeleteContact contact={contact} deleteContact={deleteContact} closeDeleteModal={closeDeleteModal} />}
						</div>
					)
			)}

			{creator.visible && <CreateContact addContact={addContact} closeCreator={closeCreator} />}
		</div>
	);
}
