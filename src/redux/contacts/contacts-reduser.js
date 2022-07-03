import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";
import contactsDB from "../../components/Contacts/contactsDB.json";

function defaultContacts() {
	if (!localStorage.getItem("contacts")) return contactsDB;
	return JSON.parse(localStorage.getItem("contacts"));
}

const contacts = createReducer(defaultContacts, {
	[actions.viewContact]: (state, action) =>
		state.map(contact => {
			if (contact.view && contact.id !== action.payload) return { ...contact, view: false };
			if (contact.id === action.payload) return { ...contact, view: true };
			return contact;
		}),

	[actions.addContact]: (state, action) => [...state, action.payload],

	[actions.editContact]: (state, action) => {
		const newContactList = state.filter(contact => contact.id !== action.payload.contactId);
		newContactList.push(action.payload.editedContact);
		return newContactList;
	},

	[actions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer("", {
	[actions.filterContacts]: (state, action) => (state = action.payload),
});

export default combineReducers({
	contacts,
	filter,
});
