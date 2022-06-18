import React, { useState } from "react";
import { favorites } from "./favorites";
import Windows from "../Windows";
import styles from "./Dockbar.module.css";
import windowsStyles from "../Windows/Windows.module.css";

export default function Dockbar() {
	const [state, setState] = useState(favorites);
	state.splice(2, 2);

	const openWindow = idx => {
		if (state[idx].open) {
			minimizeWindow(idx);
			return;
		}

		setState([...state, (state[idx].open = true)]);
	};

	const closeWindow = idx => {
		setState([...state, (state[idx].open = false)]);
	};

	const minimizeWindow = idx => {
		if (!state[idx].hidden) {
			setState([...state, state[idx].classlist.push(windowsStyles.hidden), (state[idx].hidden = true)]);
			return;
		}

		setState([...state, state[idx].classlist.pop(), (state[idx].hidden = false)]);
	};

	return (
		<div>
			<Windows state={state} onClose={closeWindow} onMinimize={minimizeWindow} />
			<ul className={styles.container}>
				{state.map((f, index) => (
					<li className={styles.item} key={f.id} onClick={() => openWindow(index)}>
						<p className={styles.title}>{f.title}</p>
						{f.icon}
						{f.open && <div className={styles.active}></div>}
					</li>
				))}
			</ul>
		</div>
	);
}
