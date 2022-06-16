import React, { useState } from "react";
import favorites from "./favorites";
import "./dockbar-styles.css";

export default function DockbarList() {
	const [state] = useState(favorites);

	return (
		<ul className="container">
			{state.favorites.map(f => (
				<li className="item" key={f.id}>
					<p className="title">{f.title}</p>
					{f.icon}
				</li>
			))}
		</ul>
	);
}
