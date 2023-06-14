import React, { useState } from "react";
import { addZero, monthCoverting, weekdayConverting } from "./DateFormating";
import styles from "./Statusbar.module.scss";

export default function Statusbar() {
	const [clock, setClock] = useState("Loading...");

	setInterval(() => {
		const dateNow = new Date();
		const day = weekdayConverting(dateNow.getDay());
		const date = dateNow.getDate();
		const month = monthCoverting(dateNow.getMonth());
		const houres = addZero(dateNow.getHours());
		const minutes = addZero(dateNow.getMinutes());

		setClock(`${day}  ${date}  ${month}    ${houres}:${minutes}`);
	}, 1000);

	return <div className={styles.container}>{clock}</div>;
}
