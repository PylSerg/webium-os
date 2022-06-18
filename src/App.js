import React, { useState } from "react";
import { favorites } from "./components/Dockbar/favorites";
import Statusbar from "./components/Statusbar";
import Frames from "./components/Frames";
import Dockbar from "./components/Dockbar";
import frameStyles from "./components/Frames/Frames.module.css";

export default function App() {
	const [state, setState] = useState(favorites);
	state.splice(2, 2);

	function openFrame(idx) {
		if (state[idx].open) {
			minimiseFrame(idx);
			return;
		}

		setState([...state, (state[idx].open = true)]);
	}

	function closeFrame(idx) {
		setState([...state, (state[idx].open = false)]);
	}

	function minimiseFrame(idx) {
		if (!state[idx].hidden) {
			setState([...state, state[idx].classlist.push(frameStyles.hidden), (state[idx].hidden = true)]);
			return;
		}

		setState([...state, state[idx].classlist.pop(), (state[idx].hidden = false)]);
	}

	return (
		<div>
			<Statusbar />
			<Frames state={state} onClose={closeFrame} onMinimize={minimiseFrame} />
			<Dockbar state={state} onOpen={openFrame} />
		</div>
	);
}
