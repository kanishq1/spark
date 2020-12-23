import React, { useEffect } from "react";
import Navbar1 from "../Components/Navbar1";
import rahulImg from "../Images/rahul.jpeg";
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
export default function Team() {
	useEffect(() => {
		showLoader();
		addClass();
	}, []);
	return (
		<>
			<Navbar1 />
			<section id="team" className="section-padding" style={{ background: "black", color: "white" }}>
				<div className="container">
					<div className="section-title">
						<h2 style={{ color: "#fff7" }}>Our Team</h2>
						<p style={{ color: "#fff" }}>Meet our stellar team who makes everything awesome possible</p>
					</div>

					<div className="row justify-content-between mb-5" data-aos="fade-down">
						{[
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5603AQHQCGdsy5nc6Q/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=4zjHCuoXnDfRoK0CtCoN0uujsMAjDkcDqdjeKWInzsE",
								name: "Sundi Natrajan  ",
								designation: "Ceo ABC infotech",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C4E03AQHlH4LwtZtp8A/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=tQes6I3Kx9-CLTDZWODLj201TymXh3laEU_7aeKjVyE",
								name: "Vipul Choubey",
								designation: "Ceo ABC infotech",
							},

							{
								img: rahulImg,
								name: "Rahul Seth",
								designation: "Ceo ABC infotech",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5103AQFyMYvdmUJX2A/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=-d3ZUcEj9J7R_GWxpEIv4AgNg9K14yI4E4AWaewLfSI",
								name: "Naveen Karnam",
								designation: "Ceo ABC infotech",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5603AQGQgLdaw2xnNg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=HfQOssFcV8m80w2r3xc2pLCZbVQfdcECkxqSIZF6hmI",
								name: "Shavak Agrawal",
								designation: "Ceo ABC infotech",
							},
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Yash Agarwal",
								designation: "Ceo ABC infotech",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5603AQHHrl1zHl5y_A/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=uWkpJa4j9SlhuX0tdo-_NoxyLcmj0DS5lGRKMkD-IOU",
								name: "Pratim Pathak ",
								designation: "Ceo ABC infotech",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C4E03AQH8JP02_MTluA/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=SsQ3A37BHh2t8cimqQytePExkp8Y2sFqhsOIGtLRzDk",
								name: "Isha Vyasl",
								designation: "Ceo ABC infotech",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5103AQFyR0E23gWq2Q/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=z_2NuaSLYiTaE34wuRZqhG10KZCCbnr88wURlJXLTyc",
								name: "Siddharth Goel",
								designation: "Ceo ABC infotech",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5103AQFVPZNc_b0v8Q/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=38txb8tZUlKpQv01r6adsCqv3-e23PjVNiYMYohCM3I",
								name: "Ansh Gupta",
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
									{/* <b>{i.designation}</b> */}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
