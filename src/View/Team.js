import React from "react";

export default function Team() {
	return (
		<>
			<section id="team" className="section-padding" style={{ background: "black", color: "white" }}>
				<div className="container">
					<div className="section-title" data-aos="fade-up">
						<h2 style={{ color: "#fff7" }}>Our Team</h2>
						<p style={{ color: "#fff" }}>Meet our stellar team who makes everything awesome possible</p>
					</div>

					<div className="row justify-content-between mb-5">
						{[
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Yash Agarwal",
								designation: "Ceo ABC infotech",
							},
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Yash Agarwal",
								designation: "Ceo ABC infotech",
							},
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Yash Agarwal",
								designation: "Ceo ABC infotech",
							},
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Yash Agarwal",
								designation: "Ceo ABC infotech",
							},
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Yash Agarwal",
								designation: "Ceo ABC infotech",
							},
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Yash Agarwal",
								designation: "Ceo ABC infotech",
							},
						].map((i, k) => (
							<div className="col-lg-4 col-sm-6 col-11 mx-auto my-4" style={{ textAlign: "center" }}>
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
		</>
	);
}
