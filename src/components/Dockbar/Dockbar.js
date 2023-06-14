import React from "react";
import styles from "./Dockbar.module.scss";

export default function Dockbar({ favorites, onOpen }) {
	return (
		<div>
			<div className={styles.caller}></div>

			<ul className={styles.container}>
				{favorites.map((f) => (
					<li className={styles.item} key={f.id} onClick={() => onOpen(f.id)}>
						<p className={styles.title}>{f.title}</p>
						{f.icon}
						{f.open && <div className={styles.active}></div>}
					</li>
				))}
			</ul>
		</div>
	);
}
