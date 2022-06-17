import React, { useState } from "react";
import favorites from "./favorites";
import Contacts from "../Contacts";
import Calendar from "../Calendar";
import styles from "./Dockbar.module.css";
import windowsStyles from "./WindowsStyles.module.css";

export default function Dockbar() {
	const [state, setState] = useState(favorites.favorites);
	state.splice(2, 1);

	const openWindow = idx => {
		if (state[idx].open) {
			closeWindow(idx);
			return;
		}
		setState([...state, (state[idx].open = true)]);
	};

	const closeWindow = idx => {
		setState([...state, (state[idx].open = false)]);
	};

	return (
		<div>
			{state[0].open && (
				<div className={windowsStyles.container} id={windowsStyles.contacts}>
					<div className={windowsStyles.header}>
						<button type="button" className={windowsStyles.close} onClick={() => closeWindow(0)} title="Close">
							&times;
						</button>
						<p className={windowsStyles.title}>{state[0].title}</p>
					</div>

					<Contacts />
				</div>
			)}

			{state[1].open && (
				<div className={windowsStyles.container} id={windowsStyles.calendar}>
					<div className={windowsStyles.header}>
						<button type="button" className={windowsStyles.close} onClick={() => closeWindow(1)} title="Close">
							&times;
						</button>
						<p className={windowsStyles.title}>{state[1].title}</p>
					</div>

					<Calendar />
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
