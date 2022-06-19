import React, { useState } from "react";
import { fav } from "./components/Dockbar/favorites";
import Statusbar from "./components/Statusbar";
import Frames from "./components/Frames";
import Dockbar from "./components/Dockbar";
import frameStyles from "./components/Frames/Frames.module.css";

export default function App() {
	const [favorites, setFavorites] = useState(fav);

	function openFrame(favId) {
		setFavorites(prevFavorites =>
			prevFavorites.map(favorit => {
				if (favorit.id === favId && !favorit.hidden) return { ...favorit, hidden: true, classlist: [...favorit.classlist, frameStyles.hidden] };

				if (favorit.id === favId && favorit.open && favorit.hidden) {
					const favoritClasses = [...favorit.classlist];
					favoritClasses.pop();
					return { ...favorit, hidden: false, classlist: favoritClasses };
				}

				if (favorit.id === favId && !favorit.open) return { ...favorit, open: true, hidden: false };

				return favorit;
			})
		);
	}

	function closeFrame(favId) {
		setFavorites(prevFavorites =>
			prevFavorites.map(favorit => {
				if (favorit.id === favId) return { ...favorit, open: false, hidden: true };
				return favorit;
			})
		);
	}

	function minimiseFrame(favId) {
		setFavorites(prevFavorites =>
			prevFavorites.map(favorit => {
				if (favorit.id === favId) return { ...favorit, hidden: true, classlist: [...favorit.classlist, frameStyles.hidden] };
				return favorit;
			})
		);
	}

	return (
		<div>
			<Statusbar />
			<Frames favorites={favorites} onClose={closeFrame} onMinimize={minimiseFrame} />
			<Dockbar favorites={favorites} onOpen={openFrame} />
		</div>
	);
}
