import { useState } from "react";
import { fav } from "./components/Dockbar/favorites";
import Statusbar from "./components/Statusbar";
import Frames from "./components/Frames";
import Dockbar from "./components/Dockbar";
import frameStyles from "./components/Frames/Frames.module.css";

export default function App() {
	const [favorites, setFavorites] = useState(fav);
	const [rate, setRate] = useState(0);

	console.log("z-index => ", rate);
	console.table(favorites);

	function openFrame(favId) {
		setFavorites(prevFavorites =>
			prevFavorites.map(favorit => {
				if (favorit.id === favId && !favorit.hidden && favorit.index === rate) return { ...favorit, hidden: true, classlist: [...favorit.classlist, frameStyles.hidden] };

				if (favorit.id === favId && !favorit.hidden) {
					setRate(prevRate => prevRate + 1);
					return { ...favorit, index: rate + 1 };
				}

				if (favorit.id === favId && favorit.open && favorit.hidden) {
					const favoritClasses = [...favorit.classlist];
					favoritClasses.pop();
					setRate(prevrate => prevrate + 1);
					return { ...favorit, hidden: false, index: rate + 1, classlist: favoritClasses };
				}

				if (favorit.id === favId && !favorit.open) return { ...favorit, open: true, hidden: false };

				return favorit;
			})
		);
	}

	function closeFrame(favId) {
		setFavorites(prevFavorites =>
			prevFavorites.map(favorit => {
				if (favorit.id === favId) return { ...favorit, open: false, opened: 0, hidden: true };
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

	function changeOpened(favId, fc) {
		setRate(prevRate => prevRate + 1);

		setFavorites(prevFavorites =>
			prevFavorites.map(favorit => {
				if (favorit.id === favId) return { ...favorit, open: true, opened: fc + 1, index: rate + 1 };
				return favorit;
			})
		);
	}

	return (
		<div>
			<Statusbar />

			<Frames favorites={favorites} rate={rate} changeOpened={changeOpened} setRate={setRate} onClose={closeFrame} onMinimize={minimiseFrame} />

			<Dockbar favorites={favorites} onOpen={openFrame} />
		</div>
	);
}
