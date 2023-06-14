import { useEffect } from "react";
import frameStyles from "./Frames.module.scss";

export default function Frames({ favorites, changeOpened, onClose, onMinimize }) {
	useEffect(() => {
		favorites.map((f) => {
			if (f.open && !f.opened) {
				changeOpened(f.id);
			}
		});
	}, [favorites]);

	return (
		<div>
			{favorites.map(
				(f) =>
					f.open && (
						<div className={f.classlist.join(" ")} style={{ zIndex: f.index }} key={f.id}>
							<div className={frameStyles.header}>
								<p className={frameStyles.title} onClick={() => changeOpened(f.id)}>
									{f.title}
								</p>

								<button type='button' className={frameStyles.close} onClick={() => onClose(f.id)} title='Close'>
									&times;
								</button>
								<button type='button' className={frameStyles.minimise} onClick={() => onMinimize(f.id)} title='Minimise'>
									&ndash;
								</button>
							</div>
							{f.component}
						</div>
					),
			)}
		</div>
	);
}
