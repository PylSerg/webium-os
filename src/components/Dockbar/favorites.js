import React from "react";
import { FcContacts, FcCalendar } from "react-icons/fc";

const favorites = [
	{
		id: 1,
		icon: <FcContacts className="icon" />,
		title: "Contacts",
		path: "",
	},

	{
		id: 2,
		icon: <FcCalendar className="icon" />,
		title: "Calendar",
		path: "",
	},
];

export default { favorites };
