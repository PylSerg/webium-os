import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";
import "./styles.css";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App tab="home" />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
