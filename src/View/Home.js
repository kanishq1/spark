import React, { useEffect } from "react";
import ContactComponent from "../Components/Contact";
import Faq from "../Components/Faq";
// import "./App.css";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const loader = document.querySelector(".preloader");

const showLoader = () => {
	if (typeof loader?.classList?.remove === "function") {
		loader.classList.remove("preloader");
	}
};
const addClass = () => {
	if (typeof loader?.classList?.remove === "function") {
		loader.classList.add("loader-hide");
	}
};
function App() {
	useEffect(() => {
		console.log("hey");
		showLoader();
		addClass();
	}, []);
	return (
		<div className="App">
			<Navbar />
			<div>
				<Hero />
				<main id="">
					<section id="about" className="about">
						<div className="container">
							<div className="section-title" data-aos="fade-up">
								<h2>About</h2>
								<p>About BITS Spark</p>
							</div>
							<div className="row justify-content-between mb-5" data-aos="fade-up">
								<div className="col-lg-10 col-xs-11 mx-auto" style={{ textAlign: "center" }}>
									<p className="about-para">
										BITS Spark was started by a core group of BITSian alumni along with help from
										BITSAA, the university, and faculty with a purpose to produce and create amazing
										BITSian startups and entrepreneurs. BITS Spark’s vision is to make BITS Pilani
										one of the top 3 institutes for entrepreneurship in Asia. Spark Angels set the
										stage for intensive interaction between budding startups and angel investors and
										support the entire investment process from scratch. The angels come from diverse
										backgrounds and the platform is completely sector agnostic.
									</p>
									{/* <button
										className="btn btn-dark btn-rounded mt-3"
										style={{ borderRadius: "60px", padding: "10px 18px" }}
									>
										READ OUR BLOG
									</button> */}
								</div>
							</div>
						</div>
					</section>
					<section id="gallery" className="portfolio section-bg">
						<div className="container">
							<div className="section-title" data-aos="fade-up">
								<h2>Gallery</h2>
								<p>We always believe in a vibrant community</p>
							</div>
							<div
								className="row portfolio-container justify-content-center"
								data-aos="fade-up"
								data-aos-delay={200}
							>
								{[
									{
										img:
											"https://ik.imagekit.io/enactus/44059091_2099515570079006_6182605804844089344_o_qwliM4IL0.jpg",
										tag: "BGM 2020",
									},
									{
										img:
											"https://ik.imagekit.io/enactus/44846039_2120702877960275_2682653001331507200_o_M9xmJQ4oR.jpg",
										tag: "BGM 2020",
									},
									{
										img:
											"https://ik.imagekit.io/enactus/82335129_2721661387911002_8368898124495716352_o__2__nz7rHuScNe.jpg",
										tag: "BGM 2020",
									},
									{
										img: "https://ik.imagekit.io/enactus/DSC_0568__1__MgHRIdHYt.JPG",
										tag: "BGM 2020",
									},
								].map((i, k) => (
									<div className="col-lg-4 col-md-6 portfolio-item filter-app">
										<div className="portfolio-wrap">
											<img src={i.img} className="img-fluid" alt="" />
											<div className="portfolio-links">
												<a
													href={i.img}
													data-gall="portfolioGallery"
													className="venobox"
													title={i.tag}
												>
													<i className="icofont-plus-circle" />
												</a>
											</div>
											<div className="portfolio-info">
												<h4>{i.tag}</h4>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
					<section id="" className="">
						<div className="container">
							<div className="section-title" data-aos="fade-up">
								<h2>Application Process</h2>
								<p>Start-ups Application Process: Round 11 </p>
							</div>
							<div className="row justify-content-center mb-5" data-aos="fade-up">
								<div className="col-md-2 p-0 m-0 col-11" style={{ textAlign: "center" }}>
									<i className="flaticon-edit"></i>
									<h1>
										<span class="badge badge-dark">STEP 1</span>
									</h1>
									<h5>
										<b>Application</b>
									</h5>
									<p>
										All aspiring startups to fill out the form for Investment Round 11. Linked here.
									</p>
								</div>
								<div className="col-md-1 my-auto p-0 d-none d-md-block" style={{ textAlign: "center" }}>
									<i
										className="fa fa-arrow-right"
										aria-hidden="true"
										style={{ fontSize: "3rem" }}
									></i>
								</div>
								<div className="col-md-1 my-auto p-0 d-md-none" style={{ textAlign: "center" }}>
									<i
										className="fa fa-arrow-down my-4"
										aria-hidden="true"
										style={{ fontSize: "3rem" }}
									></i>
								</div>
								<div className="col-md-2 p-0 m-0 col-11" style={{ textAlign: "center" }}>
									<i className="flaticon-video-chat"></i>
									<h1>
										<span class="badge badge-dark">STEP 2</span>
									</h1>
									<h5>
										<b>Interview & Shortlisting</b>
									</h5>
									<p>
										8-10 Startups to be shortlisted for the Pitch based on the Application and an
										Interview
									</p>
								</div>
								<div className="col-md-1 my-auto p-0 d-none d-md-block" style={{ textAlign: "center" }}>
									<i
										className="fa fa-arrow-right"
										aria-hidden="true"
										style={{ fontSize: "3rem" }}
									></i>
								</div>
								<div className="col-md-1 my-auto p-0 d-md-none" style={{ textAlign: "center" }}>
									<i
										className="fa fa-arrow-down my-4"
										aria-hidden="true"
										style={{ fontSize: "3rem" }}
									></i>
								</div>
								<div className="col-md-2 p-0 m-0 col-11" style={{ textAlign: "center" }}>
									<i className="flaticon-video-conference"></i>
									<h1>
										<span class="badge badge-dark">STEP 3</span>
									</h1>
									<h5>
										<b>Pitch</b>
									</h5>
									<p>
										Selected startups to A 25 minute Webex pitch in front of 200+ Angel Investors
										from the Global BITSian Network
									</p>
								</div>
								<div className="col-md-1 my-auto p-0 d-none d-md-block" style={{ textAlign: "center" }}>
									<i
										className="fa fa-arrow-right"
										aria-hidden="true"
										style={{ fontSize: "3rem" }}
									></i>
								</div>
								<div className="col-md-1 my-auto p-0 d-md-none" style={{ textAlign: "center" }}>
									<i
										className="fa fa-arrow-down my-4"
										aria-hidden="true"
										style={{ fontSize: "3rem" }}
									></i>
								</div>
								<div className="col-md-2 p-0 m-0 col-11" style={{ textAlign: "center" }}>
									<i className="flaticon-file"></i>
									<h1>
										<span class="badge badge-dark">STEP 4</span>
									</h1>
									<h5>
										<b>Closure</b>
									</h5>
									<p>
										A commitment sheet to be shared with investors with follow-ups & due diligence
										calls arranged with interested investors to finally seal the deals
									</p>
								</div>
							</div>
						</div>
					</section>
					<ContactComponent />
					<Faq />
				</main>
			</div>
		</div>
	);
}

export default App;
