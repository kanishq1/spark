import React from "react";

export default function Navbar() {
	console.log(window.location.pathname);
	return (
		<>
			<header id="header" className="fixed-top">
				<div className="container-fluid d-flex">
					<div className="logo mr-auto">
						<a href="/">
							<img
								style={{ marginLeft: "15px" }}
								src="https://ik.imagekit.io/enactus/spark-removebg-preview_gpu1GZxEl.png"
								alt=""
								className="img-fluid"
							/>
						</a>
					</div>
					<nav style={{ marginRight: "6vw" }} className="nav-menu d-none d-lg-block">
						<ul>
							<li className={window.location.pathname === "/" ? "active" : ""}>
								<a href="/">Home</a>
							</li>
							<li className={window.location.pathname === "/about" ? "active" : ""}>
								<a href="/#about" className="smoothscroll">
									About Spark
								</a>
							</li>
							<li className={window.location.pathname === "/our-investors" ? "active" : ""}>
								<a href="/our-investors">Our Investors</a>
							</li>
							<li className={window.location.pathname === "/portfolio" ? "active" : ""}>
								<a href="/portfolio">Portfolio</a>
							</li>
							<li className={window.location.pathname === "/team" ? "active" : ""}>
								<a href="/team">Team</a>
							</li>
							<li className={window.location.pathname === "/contact" ? "active" : ""}>
								<a href="/#contact" className="smoothscroll">
									Contact Us
								</a>
							</li>
						</ul>
					</nav>
					{/* .nav-menu */}
				</div>
			</header>
		</>
	);
}
