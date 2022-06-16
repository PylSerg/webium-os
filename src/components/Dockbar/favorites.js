import React from "react";
import { FcContacts, FcCalendar } from "react-icons/fc";

const favorites = [
	{
		id: 1,
		icon: <FcContacts className="icon" />,
		title: "Contacts",
		path: "",
		open: false,
	},

	{
		id: 2,
		icon: <FcCalendar className="icon" />,
		title: "Calendar",
		path: "",
		open: false,
	},
];

export default { favorites };
