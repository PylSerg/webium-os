import { useState, useEffect } from "react";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "170043f322mshfc386e972c7b74fp11c8b2jsnf26f0c9768b2",
		"X-RapidAPI-Host": "genius.p.rapidapi.com",
	},
};

export default function Songs() {
	const [songs, setSongs] = useState(null);
	console.log(songs);

	useEffect(() => {
		fetch("https://genius.p.rapidapi.com/artists/16775/songs", options)
			.then(response => response.json())
			.then(data => setSongs(data.response.songs))
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
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
		</div>
	);
}
