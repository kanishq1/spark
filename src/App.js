import React from "react";
// import "./App.css";
import Hero from "./Components/Hero";

function App() {
	return (
		<div className="App">
			<div>
				{/* ======= Hero Section ======= */}
				<Hero />
				{/* End Hero */}
				<main id="main">
					{/* ======= About Section ======= */}
					<section id="about" className="about">
						<div className="container">
							<div className="row justify-content-between">
								<div className="col-lg-5 align-items-center justify-content-center about-img">
									<img
										src="assets/img/about-img.svg"
										className="img-fluid"
										alt=""
										data-aos="zoom-in"
									/>
									<a href="/about" className="btn btn-danger mt-5 py-2 px-3 btn-lg">
										Apply as StartUp
									</a>
								</div>
								<div className="col-lg-5 align-items-center justify-content-center about-img">
									<img
										src="assets/img/about-img.svg"
										className="img-fluid"
										alt=""
										data-aos="zoom-in"
									/>
									<a href="/about" className="btn btn-danger mt-5 py-2 px-3 btn-lg">
										Become an Angel
									</a>
								</div>
								{/* <div className="col-lg-6 pt-5 pt-lg-0">
									<h3 data-aos="fade-up">Voluptatem dignissimos provident quasi</h3>
									<p data-aos="fade-up" data-aos-delay={100}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in
										reprehenderit
									</p>
									<div className="row">
										<div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
											<i className="bx bx-receipt" />
											<h4>Corporis voluptates sit</h4>
											<p>
												Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
												nisi ut aliquip
											</p>
										</div>
										<div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
											<i className="bx bx-cube-alt" />
											<h4>Ullamco laboris nisi</h4>
											<p>
												Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
												officia deserunt
											</p>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

export default App;
