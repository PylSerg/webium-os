import { useState, useEffect } from "react";
import request from "../request";
import { RiPlayFill } from "react-icons/ri";
import styles from "../Music.module.css";

const playlistNumber = 16783;

export default function Playlist1() {
	const [songs, setSongs] = useState(null);

	useEffect(() => {
		const req = request(playlistNumber).then(value => setSongs(value));
	}, []);

	return (
		<>
			{songs && (
				<ul className={styles.container}>
					{songs.map(song => (
						<li className={styles.songCard} key={song.api_path}>
							<div>
								<img src={song.header_image_thumbnail_url} />
								<a className={styles.playLink} href={song.url} target="_blank">
									<RiPlayFill className={styles.playLinkIcon} />
								</a>
							</div>
							<div className={styles.title}>
								{song.artist_names} - {song.title}
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
