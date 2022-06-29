import { useState, useEffect } from "react";
import request from "../request";

const playlistNumber = 16770;

export default function Playlist1() {
	const [songs, setSongs] = useState(null);

	useEffect(() => {
		const req = request(playlistNumber).then(value => setSongs(value));
	}, []);

	return (
		<>
			{songs && (
				<ul>
					{songs.map(song => (
						<li key={song.api_path}>
							{song.artist_names} - {song.title}
							<a href={song.url} target="_blank">
								listen
							</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
