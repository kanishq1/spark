import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Routes";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<App />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
