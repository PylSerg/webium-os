import React, { useState } from "react";
import frameStyles from "./Frames.module.css";

export default function Frames({ favorites, onClose, onMinimize }) {
	return (
		<div>
			{favorites.map(
				f =>
					f.open && (
						<div className={f.classlist.join(" ")} key={f.id}>
							<div className={frameStyles.header}>
								<button type="button" className={frameStyles.close} onClick={() => onClose(f.id)} title="Close">
									&times;
								</button>
								<button type="button" className={frameStyles.minimise} onClick={() => onMinimize(f.id)} title="Minimise">
									&ndash;
								</button>
								<p className={frameStyles.title}>{f.title}</p>
							</div>
							{f.component}
						</div>
					)
			)}
		</div>
	);
}
