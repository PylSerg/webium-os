import React from "react";
import styles from "./Dockbar.module.css";

export default function Dockbar({ state, onOpen }) {
	return (
		<div>
			<ul className={styles.container}>
				{state.map((f, index) => (
					<li className={styles.item} key={f.id} onClick={() => onOpen(index)}>
						<p className={styles.title}>{f.title}</p>
						{f.icon}
						{f.open && <div className={styles.active}></div>}
					</li>
				))}
			</ul>
		</div>
	);
}
