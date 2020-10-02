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
								<button type="button" className="btn btn-outline-light btn-lg mt-5 word">
									APPLY NOW
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
