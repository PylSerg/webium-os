import React from "react";
import Contacts from "../Contacts";
import Calendar from "../Calendar";
import { FcContacts, FcCalendar } from "react-icons/fc";
import styles from "./Dockbar.module.css";
import frameStyles from "../Frames/Frames.module.css";

const fav = [
	{
		id: 1,
		icon: <FcContacts className={styles.icon} />,
		title: "Contacts",
		component: <Contacts />,
		open: false,
		hidden: true,
		classlist: [frameStyles.container, frameStyles.contacts],
	},

	{
		id: 2,
		icon: <FcCalendar className={styles.icon} />,
		title: "Calendar",
		component: <Calendar />,
		open: false,
		hidden: true,
		classlist: [frameStyles.container, frameStyles.calendar],
	},
];

export { fav };
