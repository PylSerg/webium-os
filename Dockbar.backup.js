import React, { useState } from "react";
import { favorites } from "./favorites";
import Contacts from "../Contacts";
import Calendar from "../Calendar";
import styles from "./Dockbar.module.css";
import windowsStyles from "./WindowsStyles.module.css";

export default function Dockbar() {
	const [state, setState] = useState(favorites);
	state.splice(2, 2);

	// console.log(state);

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
			{state[0].open && (
				<div className={state[0].classlist.join(" ")} id={windowsStyles.contacts}>
					<div className={windowsStyles.header}>
						<button type="button" className={windowsStyles.close} onClick={() => closeWindow(0)} title="Close">
							&times;
						</button>
						<button type="button" className={windowsStyles.minimise} onClick={() => minimizeWindow(0)} title="Minimise">
							&ndash;
						</button>
						<p className={windowsStyles.title}>{state[0].title}</p>
					</div>

					<Contacts />
				</div>
			)}

			{state[1].open && (
				<div className={state[1].classlist.join(" ")} id={windowsStyles.calendar}>
					<div className={windowsStyles.header}>
						<button type="button" className={windowsStyles.close} onClick={() => closeWindow(1)} title="Close">
							&times;
						</button>
						<button type="button" className={windowsStyles.minimise} onClick={() => minimizeWindow(1)} title="Minimise">
							&ndash;
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
						{f.open && <div className={styles.active}></div>}
					</li>
				))}
			</ul>
		</div>
	);
}
