import React from "react";
import { FcContacts, FcCalendar } from "react-icons/fc";
import styles from "./Dockbar.module.css";
import windowsStyles from "./WindowsStyles.module.css";

const favorites = [
	{
		id: 1,
		icon: <FcContacts className={styles.icon} />,
		title: "Contacts",
		path: "",
		open: false,
		hidden: false,
		classlist: [windowsStyles.container],
	},

	{
		id: 2,
		icon: <FcCalendar className={styles.icon} />,
		title: "Calendar",
		path: "",
		open: false,
		hidden: false,
		classlist: [windowsStyles.container],
	},
];

export default { favorites };
