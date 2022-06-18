import React, { useState } from "react";
import { favorites } from "./favorites";
import Frames from "../Frames";
import styles from "./Dockbar.module.css";
import frameStyles from "../Frames/Frames.module.css";

export default function Dockbar() {
	const [state, setState] = useState(favorites);
	state.splice(2, 2);

	const openFrame = idx => {
		if (state[idx].open) {
			minimiseFrame(idx);
			return;
		}

		setState([...state, (state[idx].open = true)]);
	};

	const closeFrame = idx => {
		setState([...state, (state[idx].open = false)]);
	};

	const minimiseFrame = idx => {
		if (!state[idx].hidden) {
			setState([...state, state[idx].classlist.push(frameStyles.hidden), (state[idx].hidden = true)]);
			return;
		}

		setState([...state, state[idx].classlist.pop(), (state[idx].hidden = false)]);
	};

	return (
		<div>
			<Frames state={state} onClose={closeFrame} onMinimize={minimiseFrame} />
			<ul className={styles.container}>
				{state.map((f, index) => (
					<li className={styles.item} key={f.id} onClick={() => openFrame(index)}>
						<p className={styles.title}>{f.title}</p>
						{f.icon}
						{f.open && <div className={styles.active}></div>}
					</li>
				))}
			</ul>
		</div>
	);
}
