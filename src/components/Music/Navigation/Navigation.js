import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<nav>
			<NavLink to="/playlist-1">Playlist 1</NavLink>
			<NavLink to="/playlist-2">Playlist 2</NavLink>
			<NavLink to="/playlist-3">Playlist 3</NavLink>
			<NavLink to="/playlist-4">Playlist 4</NavLink>
			<NavLink to="/playlist-5">Playlist 5</NavLink>
		</nav>
	);
}
