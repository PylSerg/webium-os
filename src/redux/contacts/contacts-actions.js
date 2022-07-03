import { createAction } from "@reduxjs/toolkit";

export const filterContacts = createAction("contacts/filter");

export const viewContact = createAction("contacts/view");
export const addContact = createAction("contacts/add");
export const editContact = createAction("contacts/edit", (contactId, editedContact) => ({
	payload: {
		contactId,
		editedContact,
	},
}));
export const deleteContact = createAction("contacts/delete");
