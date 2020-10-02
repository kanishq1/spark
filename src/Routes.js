import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./View/Home";
import Contact from "./View/Contact";
// import App from "./App";
import About from "./View/About";
export default function Routes(props) {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/contact" render={() => <Contact />} />
					<Route exact path="/about" render={() => <About />} />
				</Switch>
			</Router>
		</>
	);
}
