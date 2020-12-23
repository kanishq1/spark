import React from "react";

export default function Navbar1() {
	return (
		<>
			<header id="header1" className="fixed-top header-shadow">
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
					<nav style={{ marginRight: "6vw" }} className="nav-menu d-none d-lg-block ">
						<ul>
							<li className={window.location.pathname === "/" && !window.location.hash ? "active" : ""}>
								<a href="/index.html">Home</a>
							</li>
							<li id="about-nav" className={window.location.hash === "#about" ? "active" : ""}>
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
							<li id="contact-nav" className={window.location.hash === "#contact" ? "active" : ""}>
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
