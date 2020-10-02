import React from "react";
import ContactComponent from "../Components/Contact";
import Faq from "../Components/Faq";
// import "./App.css";
import Hero from "../Components/Hero";

function App() {
	return (
		<div className="App">
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
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industry's standard dummy text ever since the 1500s, when an
										unknown printer took a galley of type and scrambled it to make a type specimen
										book. It has survived not only five centuries, but also the leap into electronic
										typesetting, remaining essentially unchanged. It was popularised in the 1960s
										with the release of Letraset sheets containing Lorem
									</p>
									<button
										className="btn btn-dark btn-rounded mt-3"
										style={{ borderRadius: "60px", padding: "10px 18px" }}
									>
										READ OUR BLOG
									</button>
								</div>
							</div>
						</div>
					</section>
					<section id="angels" className="" style={{ background: "black", color: "white" }}>
						<div className="container">
							<div className="section-title" data-aos="fade-up">
								<h2 style={{ color: "#fff7" }}>Our Angels</h2>
								<p style={{ color: "#fff" }}>
									Meet our stellar team who makes everything awesome possible
								</p>
							</div>

							<div className="row justify-content-between my-5" data-aos="fade-up">
								{[
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
								].map((i, k) => (
									<div
										className="col-lg-4 col-sm-6 col-11 mx-auto my-4"
										style={{ textAlign: "center" }}
									>
										<img
											src={i.img}
											className="angels-img"
											alt="angel"
											style={{ borderRadius: "100%" }}
										/>
										<h3 className=" mt-2">{i.name}</h3>
										<p className="mt-0" style={{ textAlign: "center" }}>
											<b>{i.designation}</b>
										</p>
									</div>
								))}
							</div>
						</div>
					</section>
					<section id="team" className="">
						<div className="container">
							<div className="section-title" data-aos="fade-up">
								<h2>Our Team</h2>
								<p>Meet our stellar team who makes everything awesome possible</p>
							</div>

							<div className="row justify-content-between mb-5" data-aos="fade-up">
								{[
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
									{
										img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
										name: "Yash Agarwal",
										designation: "DANCER HUSBAND",
									},
								].map((i, k) => (
									<div
										className="col-lg-4 col-sm-6 col-11 mx-auto my-4"
										style={{ textAlign: "center" }}
									>
										<img
											src={i.img}
											className="angels-img"
											style={{ borderRadius: "10% 0 10% 0" }}
											alt=""
										/>
										<h3 className=" mt-2">{i.name}</h3>
										<p className="mt-0" style={{ textAlign: "center" }}>
											<b>{i.designation}</b>
										</p>
									</div>
								))}
							</div>
						</div>
					</section>
					<section id="gallery" className="portfolio">
						<div className="container">
							<div className="section-title" data-aos="fade-up">
								<h2>Gallery</h2>
								<p>Check out our beautifull moments</p>
							</div>
							<div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
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
					<ContactComponent />
					<Faq />
				</main>
			</div>
		</div>
	);
}

export default App;
