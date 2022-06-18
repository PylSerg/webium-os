import React, { useState } from "react";
import frameStyles from "./Frames.module.css";

export default function Frames({ state, onClose, onMinimize }) {
	return (
		<div>
			{state.map(
				(f, index) =>
					f.open && (
						<div className={f.classlist.join(" ")} id={f.idList} key={f.id}>
							<div className={frameStyles.header}>
								<button type="button" className={frameStyles.close} onClick={() => onClose(index)} title="Close">
									&times;
								</button>
								<button type="button" className={frameStyles.minimise} onClick={() => onMinimize(index)} title="Minimise">
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
