import React, { useState } from "react";
import windowsStyles from "./Windows.module.css";

const Windows = ({ fav, onClose, onMinimize }) => (
	<div>
		{fav.map(
			(f, index) =>
				f.open && (
					<div className={f.classlist.join(" ")} id={f.idList} key={f.id}>
						<div className={windowsStyles.header}>
							<button type="button" className={windowsStyles.close} onClick={() => onClose(index)} title="Close">
								&times;
							</button>
							<button type="button" className={windowsStyles.minimise} onClick={() => onMinimize(index)} title="Minimise">
								&ndash;
							</button>
							<p className={windowsStyles.title}>{f.title}</p>
						</div>
						{f.component}
					</div>
				)
		)}
	</div>
);

export default Windows;
