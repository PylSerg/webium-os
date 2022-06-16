import React, { useState } from "react";
import favorites from "./favorites";
import Contacts from "../Contacts";
import "./dockbar-styles.css";

export default function Dockbar() {
	const [state, setState] = useState(favorites.favorites);
	state.splice(2, 1);

	console.log(`State - ${Date.now()}`, state);

	const openWindow = idx => {
		setState([...state, (state[idx].open = true)]);
	};

	return (
		<div>
			{state[0].open && <Contacts />}
			<ul className="container">
				{state.map((f, index) => (
					<li className="item" key={f.id} onClick={() => openWindow(index)}>
						<p className="title">{f.title}</p>
						{f.icon}
					</li>
				))}
			</ul>
		</div>
	);
}
