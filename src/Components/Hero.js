import React from "react";

export default function Hero() {
	return (
		<>
			<section id="hero" className="d-flex align-items-center" style={{ maxWidth: "100%", overflowX: "hidden" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div
							className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 m-auto"
							style={{ textAlign: "center" }}
						>
							<h1 className="ml2">Ignite The Spark</h1>
							<h2 class="ml11">
								<span class="text-wrapper">
									<span class="line line1"></span>
									<span class="letters">Application Round is open</span>
								</span>
							</h2>
							{/* <h1 class="ml15">
							</h1> */}
							<div className=" ml15">
								<a
									href="https://bit.ly/bits-spark11"
									target="_blank"
									className="btn btn-outline-light btn-lg mt-5 word"
								>
									APPLY NOW
								</a>
							</div>
						</div>
					</div>
					<div
						style={{
							position: "absolute",
							left: "0",
							bottom: "50px",
							width: "100%",
							textAlign: "center",
							color: "white",
						}}
					>
						<a
							style={{ color: "white", fontSize: "2rem" }}
							href="/#about"
							className="btn btn-scroll-down mx-auto px-3 py-0 smoothscroll"
						>
							<i className="fa fa-angle-down" style={{ color: "white" }} aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
