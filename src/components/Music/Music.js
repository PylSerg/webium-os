import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Playlist1 = lazy(() => import("./pages/Playlist-1.js"));
const Playlist2 = lazy(() => import("./pages/Playlist-2.js"));
const Playlist3 = lazy(() => import("./pages/Playlist-3.js"));
const Playlist4 = lazy(() => import("./pages/Playlist-4.js"));
const Playlist5 = lazy(() => import("./pages/Playlist-5.js"));

export default function Music() {
	const nav = useNavigate();

	useEffect(() => {
		nav("/playlist-1", { replace: true });

		return () => {
			nav("/", { replace: true });
		};
	}, []);

	return (
		<>
			<Navigation />

			<Suspense fallback={<h1>Loading...</h1>}>
				<Routes>
					<Route path="/playlist-1" element={<Playlist1 />} />
					<Route path="/playlist-2" element={<Playlist2 />} />
					<Route path="/playlist-3" element={<Playlist3 />} />
					<Route path="/playlist-4" element={<Playlist4 />} />
					<Route path="/playlist-5" element={<Playlist5 />} />
				</Routes>
			</Suspense>
		</>
	);
}
