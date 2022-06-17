import React, { useState } from "react";
import favorites from "./favorites";
import Contacts from "../Contacts";
import styles from "./Dockbar.module.css";
import stylesContacts from "../Contacts/Contacts.module.css";

export default function Dockbar() {
	const [state, setState] = useState(favorites.favorites);
	state.splice(2, 1);

	console.log(`State - ${Date.now()}`, state);

	const openWindow = idx => {
		setState([...state, (state[idx].open = true)]);
	};

	const closeWindow = idx => {
		setState([...state, (state[idx].open = false)]);
	};

	return (
		<div>
			{state[0].open && (
				<div className={stylesContacts.container}>
					<div className={stylesContacts.header}>
						<button type="button" className={stylesContacts.close} onClick={() => closeWindow(0)} title="Close"></button>
					</div>

					<Contacts />
				</div>
			)}
			<ul className={styles.container}>
				{state.map((f, index) => (
					<li className={styles.item} key={f.id} onClick={() => openWindow(index)}>
						<p className={styles.title}>{f.title}</p>
						{f.icon}
					</li>
				))}
			</ul>
		</div>
	);
}
