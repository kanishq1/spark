import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./View/Home";
import Contact from "./View/Contact";
// import App from "./App";
import About from "./View/About";
import OurInvestors from "./View/OurInvestors";
import Team from "./View/Team";
import Portfolio from "./View/Portfolio";
export default function Routes(props) {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/our-investors" render={() => <OurInvestors />} />
					<Route exact path="/team" render={() => <Team />} />
					<Route exact path="/portfolio" render={() => <Portfolio />} />
					<Route exact path="/*" render={() => <Redirect to="/" />} />
				</Switch>
			</Router>
		</>
	);
}
