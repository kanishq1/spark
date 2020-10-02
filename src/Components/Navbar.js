import React from "react";

export default function Navbar() {
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
							<li className="active">
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/about">About Spark</a>
							</li>
							<li>
								<a href="/services">Our Investors</a>
							</li>
							<li>
								<a href="/portfolio">Portfolio</a>
							</li>
							<li>
								<a href="/team">Team</a>
							</li>
							<li>
								<a href="/contact">Contact Us</a>
							</li>
						</ul>
					</nav>
					{/* .nav-menu */}
				</div>
			</header>
		</>
	);
}
