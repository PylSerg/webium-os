import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReduser from "./contacts/contacts-reduser";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
	reducer: {
		contacts: contactsReduser,
	},
	middleware,
	devTools: process.env.NODE_ENV === "development",
});
