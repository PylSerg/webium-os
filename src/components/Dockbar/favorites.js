import React from "react";
import Contacts from "../Contacts";
import Calendar from "../Calendar";
import Music from "../Music";
import Converter from "../Converter/Converter";
import { FcContacts, FcCalendar, FcMusic, FcCurrencyExchange } from "react-icons/fc";
import styles from "./Dockbar.module.scss";
import frameStyles from "../Frames/Frames.module.scss";

const fav = [
	{
		id: 1,
		icon: <FcContacts className={styles.icon} />,
		title: "Contacts",
		component: <Contacts />,
		open: false,
		hidden: true,
		opened: false,
		index: 0,
		classlist: [frameStyles.container, frameStyles.contacts],
	},

	{
		id: 2,
		icon: <FcCalendar className={styles.icon} />,
		title: "Calendar",
		component: <Calendar />,
		open: false,
		hidden: true,
		opened: false,
		index: 0,
		classlist: [frameStyles.container, frameStyles.calendar],
	},

	{
		id: 3,
		icon: <FcMusic className={styles.icon} />,
		title: "Music",
		component: <Music />,
		open: false,
		hidden: true,
		opened: false,
		index: 0,
		classlist: [frameStyles.container, frameStyles.music],
	},

	{
		id: 4,
		icon: <FcCurrencyExchange className={styles.icon} />,
		title: "Converter",
		component: <Converter />,
		open: false,
		hidden: true,
		opened: false,
		index: 0,
		classlist: [frameStyles.container, frameStyles.converter],
	},
];

export { fav };
