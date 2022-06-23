import React from "react";

export default function AddContact({ openCreator }) {
	return (
		<div>
			<button type="button" onClick={openCreator}>
				add contact
			</button>
		</div>
	);
}
