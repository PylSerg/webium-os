import React from "react";
import { FcContacts, FcCalendar } from "react-icons/fc";
import styles from "./Dockbar.module.css";

const favorites = [
	{
		id: 1,
		icon: <FcContacts className={styles.icon} />,
		title: "Contacts",
		path: "",
		open: false,
	},

	{
		id: 2,
		icon: <FcCalendar className={styles.icon} />,
		title: "Calendar",
		path: "",
		open: false,
	},
];

export default { favorites };
