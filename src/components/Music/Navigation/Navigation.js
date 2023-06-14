import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
	let activeStyle = {
		color: "#fff",
		fontWeight: "700",
		backgroundColor: "#e91e63",
	};

	return (
		<nav>
			<NavLink to='/playlist-1' className={styles.link} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				Playlist 1
			</NavLink>

			<NavLink to='/playlist-2' className={styles.link} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				Playlist 2
			</NavLink>

			<NavLink to='/playlist-3' className={styles.link} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				Playlist 3
			</NavLink>

			<NavLink to='/playlist-4' className={styles.link} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				Playlist 4
			</NavLink>

			<NavLink to='/playlist-5' className={styles.link} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				Playlist 5
			</NavLink>
		</nav>
	);
}
