import React from "react";
import Contacts from "../Contacts";
import Calendar from "../Calendar";
import { FcContacts, FcCalendar } from "react-icons/fc";
import styles from "./Dockbar.module.css";
import windowsStyles from "../Windows/Windows.module.css";

const favorites = [
	{
		id: 1,
		icon: <FcContacts className={styles.icon} />,
		title: "Contacts",
		component: <Contacts />,
		open: false,
		hidden: false,
		classlist: [windowsStyles.container],
		idList: [windowsStyles.contacts],
	},

	{
		id: 2,
		icon: <FcCalendar className={styles.icon} />,
		title: "Calendar",
		component: <Calendar />,
		open: false,
		hidden: false,
		classlist: [windowsStyles.container],
		idList: [windowsStyles.calendar],
	},
];

export { favorites };
