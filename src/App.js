import { useState, useEffect } from "react";
import { fav } from "./components/Dockbar/favorites";
import Statusbar from "./components/Statusbar";
import Frames from "./components/Frames";
import Dockbar from "./components/Dockbar";
import frameStyles from "./components/Frames/Frames.module.scss";

export default function App() {
	const [favorites, setFavorites] = useState(fav);
	const [rate, setRate] = useState(0);

	useEffect(() => {
		let actualIndex = 0;
		const indexArray = [];

		favorites.map((f) => indexArray.push(f.index));

		indexArray.sort((a, b) => b - a);

		actualIndex = indexArray[0];

		setRate(actualIndex);
	}, [favorites]);

	function openFrame(favId) {
		setFavorites((prevFavorites) =>
			prevFavorites.map((favorit) => {
				if (favorit.id === favId && !favorit.hidden && favorit.index === rate) return { ...favorit, hidden: true, index: 0, classlist: [...favorit.classlist, frameStyles.hidden] };

				if (favorit.id === favId && !favorit.hidden) {
					setRate((prevRate) => prevRate + 1);
					return { ...favorit, index: rate + 1 };
				}

				if (favorit.id === favId && favorit.open && favorit.hidden) {
					const favoritClasses = [...favorit.classlist];
					favoritClasses.pop();
					setRate((prevrate) => prevrate + 1);
					return { ...favorit, hidden: false, index: rate + 1, classlist: favoritClasses };
				}

				if (favorit.id === favId && !favorit.open) return { ...favorit, open: true, hidden: false };

				return favorit;
			}),
		);
	}

	function closeFrame(favId) {
		setFavorites((prevFavorites) =>
			prevFavorites.map((favorit) => {
				if (favorit.id === favId) return { ...favorit, open: false, opened: false, hidden: true, index: 0 };
				return favorit;
			}),
		);
	}

	function minimiseFrame(favId) {
		setFavorites((prevFavorites) =>
			prevFavorites.map((favorit) => {
				if (favorit.id === favId) return { ...favorit, hidden: true, index: 0, classlist: [...favorit.classlist, frameStyles.hidden] };
				return favorit;
			}),
		);
	}

	function changeOpened(favId) {
		setRate((prevRate) => prevRate + 1);

		setFavorites((prevFavorites) =>
			prevFavorites.map((favorit) => {
				if (favorit.id === favId) return { ...favorit, open: true, opened: true, index: rate + 1 };
				return favorit;
			}),
		);
	}

	return (
		<div>
			<Statusbar />

			<Frames favorites={favorites} changeOpened={changeOpened} onOpen={openFrame} onClose={closeFrame} onMinimize={minimiseFrame} />

			<Dockbar favorites={favorites} onOpen={openFrame} />
		</div>
	);
}
