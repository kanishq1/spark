import React, { useEffect } from "react";
import Navbar1 from "../Components/Navbar1";
import preethyImg from "../Images/preethy.jpeg";
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
export default function OurInvestors() {
	useEffect(() => {
		console.log("hey");
		showLoader();
		addClass();
	}, []);
	return (
		<>
			<Navbar1 />
			<section id="angels" className="section-padding" style={{ background: "black", color: "white" }}>
				<div className="container">
					<div className="section-title">
						<h2 style={{ color: "#fff7" }}>Our Angels</h2>
						<p style={{ color: "#fff" }}>Meet our stellar team who makes everything awesome possible</p>
					</div>

					<div className="row justify-content-between my-5" data-aos="fade-down">
						{[
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5603AQEhcWjRMZ1qnA/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=0ziMP2Jq7FeRQEGXTg-RkJaJYkQfjH0mW2O2MNB2kMc",
								name: "Raju Reddy",
								designation: "CEO Hello World",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5603AQHQCGdsy5nc6Q/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=4zjHCuoXnDfRoK0CtCoN0uujsMAjDkcDqdjeKWInzsE",
								name: "Sundi Natrajan",
								designation: "CEO Hello World",
							},
							{
								img: "https://ik.imagekit.io/enactus/yash_1Cjav6zUny.jpeg",
								name: "Anurag Jain",
								designation: "CEO Hello World",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C4D03AQG_FRcUCK-YEQ/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=RrTeq0jdKBVJZNQpyaEUoPDeVnO4LYlI7CmEQ9VWbOM",
								name: "Jayan Ramankutty",
								designation: "CEO Hello World",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5603AQE53rmN3MsrIQ/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=NOCiyCK8CDW1DMW2Z0yu34fRvfvsUHZevitnamvTyWk",
								name: "Prem Jain",
								designation: "CEO Hello World",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C4D03AQEDMk-H0V9JjQ/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=z9jFrCL7RAwyANHi6RkiAEsVrPuc-1sulUNvPkx5buI",
								name: "Phanindra Sama",
								designation: "CEO Hello World",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C5103AQEbdvRjCPyqvg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=ZcZCfZe3RS3hu6WvYZDC89_DgEwyzX1SbUBO9ARlx-Y",
								name: "Shivakumar Ganesan",
								designation: "CEO Hello World",
							},
							{
								img: preethyImg,
								name: "Preethy Padmanabhan",
								designation: "CEO Hello World",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C4E03AQErpo7l6OSSGA/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=5xWRR2AC4_pmeGk6yQfEoMQ32Iust4pKHBtDFo3V91Q",
								name: "Sathish Gupta",
								designation: "CEO Hello World",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C4E03AQHKYggIVXSslQ/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=OZDEbjr8ss0sYFggE6mBFrKt-V6M1l886lMAq_XHKYA",
								name: "Venu Palaparthi",
								designation: "CEO Hello World",
							},
						].map((i, k) => (
							<div className="col-lg-4 col-sm-6 col-11 mx-auto my-4" style={{ textAlign: "center" }}>
								<img src={i.img} className="angels-img" alt="angel" style={{ borderRadius: "100%" }} />
								<h3 className=" mt-2">{i.name}</h3>
								{/* <p className="mt-0" style={{ textAlign: "center" }}>
									<b>{i.designation}</b>
								</p> */}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
