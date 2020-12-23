import React, { useEffect } from "react";
import Navbar1 from "../Components/Navbar1";
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
export default function Portfolio() {
	useEffect(() => {
		showLoader();
		addClass();
	}, []);
	return (
		<>
			<Navbar1 />
			<section id="portfolio" className="section-padding" style={{ background: "white", color: "black" }}>
				<div className="container">
					<div className="section-title">
						<h2>Portfolio</h2>
						<p>Meet our stellar team who makes everything awesome possible</p>
					</div>

					<div className="row justify-content-around my-5" data-aos="fade-down">
						{[
							{
								img: "https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png",
								name: "Redbus",
								details:
									"RedBus is an Indian online bus ticketing platform providing ticket booking facility through its website, iOS and Android mobile apps.",
							},
							{
								img: "https://exotel.com/wp-content/uploads/2017/11/Exotel_Final_logo.png",
								name: "Exotel",
								details:
									"Exotel is a cloud telephony platform that powers communication for enterprises, startups and small and medium enterprises in India and Southeast Asia.",
							},
							{
								img: "https://www.greyorange.com/wp-content/uploads/2020/02/GO_White_Vertical.jpg",
								name: "Grey Orange Robotics",
								details:
									"GreyOrange automates warehouse fulfillment through the combination of AI-Software and autonomous mobile robots to deliver high yield fulfillment.",
							},
							{
								img:
									"data:image/jpeg;base64,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",
								name: "e-GMAT",
								details:
									"e-GMAT is a GMAT prep company that helps plan study, track improvement, reach target GMAT score.",
							},
							{
								img: "https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png",
								name: "HealthCube",
								details:
									"HealthCube is a state-of-the-art, portable diagnosis system that can be used easily anywhere by anyone with minimal training",
							},
							{
								img: "https://www.homingos.com/img/logo_full.svg",
								name: "Homingos",
								details:
									"Homingos empowers people to preserve, share and relive memorable moments and create deep connections using AR technology.",
							},
							{
								img: "https://pixxel.space/images/pixxel.png",
								name: "Pixxel",
								details:
									"Pixxel is building a constellation of earth-imaging small satellites to provide an entirely new kind of dataset that today's satellites aren't capable of.",
							},
							{
								img: "https://ik.imagekit.io/enactus/gigstart_nNEOrIX-S.png",
								name: "Gigstart",
								details:
									"Gigstart was an online e-commerce platform and community that enables consumers, entertainers, and event planners to connect with each other.",
							},
							{
								img: "https://ik.imagekit.io/enactus/ThinksterMath_tJYIKlCtD.png",
								name: "Thinkster Math",
								details:
									"Thinkster is a maths learning programme by combining world-class curriculum with personalisation from real, experienced teachers and AI.",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C4D0BAQEEdPNkL0IrUw/company-logo_200_200/0?e=1611792000&v=beta&t=ocsDDdd0hPjZWnZXlWbuUw9brIEx-nJbG5eFPYR5_jM",
								name: "GharPay",
								details:
									"Gharpay was a doorstep payment network with a human face, allowing consumers to shop online without needing a credit/debit card.",
							},
							{
								img:
									"https://media-exp1.licdn.com/dms/image/C560BAQEMhFoB2YvbBA/company-logo_200_200/0?e=1611792000&v=beta&t=JexfV8g3FktMbPKH7G5ic4iC5k2HNvsqnqDp0iZz8R8",
								name: "Cubito",
								details:
									"Cubito was a technology-based enabler, aimed to automate the transportation logistics segment. ",
							},
							{
								img: "https://ik.imagekit.io/enactus/heymojo_0FPWa06nT.jpeg",
								name: "HeyMojo",
								details:
									"HeyMojo offers a powerful chatbot platform that every marketing agency should have to grow their online business and portfolio.",
							},
							{
								img: "https://ik.imagekit.io/enactus/intellivision_EEa2R-pxW.png",
								name: "Intellivision",
								details:
									"Intellivision is an AI-based Video Analytics Solutions for Smart Cameras, designed specifically for OEMs and Large Integrators",
							},
							{
								img: "https://ik.imagekit.io/enactus/Framebench_g9E2BO0hX.png",
								name: "Framebench",
								details:
									"Framebench is a cloud based communication and feedback platform specially for digital agencies and creative design firms.",
							},
							{
								img: "https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png",
								name: "Dextra",
								details:
									"Dextra is a collaborative platform for creative professionals - artists, designers, musicians, dancers, writers, filmmakers, photographers.",
							},
							{
								img:
									"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM5IiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMTM5IDM1Ij4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIC4yODVoMjcuOTczVjMzLjIySDB6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgPC9tYXNrPg0KICAgICAgICA8cGF0aCBmaWxsPSIjNjFEMTY5IiBkPSJNOS43MTQgMTQuOTg0aDUuMTQ0YzEuOTA2IDAgMy4yNjMtLjM0NSA0LjA3Mi0xLjAzNS44MS0uNjkxIDEuMzU4LTEuOTggMS42NDItMy44NjYuMjU1LTEuNjMuMDk3LTIuNzU1LS40NzUtMy4zNjctLjU3Mi0uNjEzLTEuNzMtLjkxOC0zLjQ3Ny0uOTE4bC01LjYxOS4wNDUtMS4yODcgOS4xNDF6TTAgMzMuMjJMNC42MTguNzA3QzcuNTQxLjQyNSAxMS41ODguMjg1IDE2Ljc2NC4yODVjNC4wOTQgMCA3LjA4Ny43NDQgOC45NzcgMi4yMzggMS44ODggMS40OTIgMi41NzggNC4wNDIgMi4wNyA3LjY1Ni0uMzE4IDIuMjk0LTEuMDQgNC4wOTMtMi4xNjYgNS4zOTUtMS4xMjkgMS4zMDYtMi44NjYgMi4wOTYtNS4yMTUgMi4zODFsLS4wNDguMjgyYzIuMTkyLjUwMyAzLjUwOCAyLjE2OSAzLjk1NCA0Ljk5NmwxLjcxNCA5Ljk4N0gxOC42MmwtMS41MjUtMTAuMDgyYy0uMTI2LTEuMDA3LS4zOTctMS42ODktLjgxLTIuMDUxLS40MTMtLjM2LTEuMDYzLS41NC0xLjk1Mi0uNTRsLTUuNDI5LS4wNS0xLjgxIDEyLjcyM0gweiIgbWFzaz0idXJsKCNiKSIvPg0KICAgICAgICA8cGF0aCBmaWxsPSIjNjFEMTY5IiBkPSJNNTQuMTIgNi44MzFINDIuMTc3Yy0uODk2IDAtMS41MzcuMTg0LTEuOTIxLjU0OC0uMzg2LjM2Mi0uNjQxIDEuMDMyLS43NjUgMi4wMTNsLS42OTQgNC45MzJoMTIuNTkybC0uNjQ3IDUuMTJoLTEyLjY0bC0uODMyIDYuMzA2Yy0uMTI1Ljg4NS0uMDI0IDEuNTEuMyAxLjg3NS4zMjUuMzYxLjkxOC41NDQgMS43ODIuNTQ0aDExLjgwNWwtLjE4NCA1LjM1NmMtMi43MTcuMzItNy4zMzEuNDc1LTEzLjg0My40NzUtMi41OTMgMC00LjQ5LS43MDItNS42OTMtMi4xMS0xLjIwNC0xLjQwNi0xLjY1Mi0zLjMyNS0xLjM0Mi01Ljc2MUwzMi42NCA3LjQ0N2MuMjc3LTIuMDIgMS4wNzEtMy42MDEgMi4zODMtNC43MzlDMzYuMzM2IDEuNTY4IDM4LjA4NyAxIDQwLjI3OSAxYzYuNzI4IDAgMTEuNjM0LjE3NCAxNC43MjEuNTIybC0uODggNS4zMXpNMTEwLjkxMiAxNi44NzhjLS43OTQgNS44MjctMi4xMzUgOS45MzQtMy45ODUgMTIuMjEzLTEuODMzIDIuMjU4LTQuNzU2IDMuNDAyLTguNjg4IDMuNDAyLTMuNzkgMC02LjMxNy0xLjEyNS03LjUxLTMuMzQzLTEuMjA3LTIuMjUzLTEuNDMyLTYuMy0uNjctMTIuMDI4Ljc5NS01LjgyNCAyLjEzNi05LjkzMyAzLjk4Ny0xMi4yMSAxLjgzLTIuMjU4IDQuNzU0LTMuNDAzIDguNjg3LTMuNDAzIDMuODgzIDAgNi40NDEgMS4xMTYgNy42IDMuMzE5IDEuMTc3IDIuMjM4IDEuMzczIDYuMjkzLjU3OSAxMi4wNU0xMDIuNzMyIDBjLTQuMzk4IDAtNy42OTQgMS4yNzctOS43OTcgMy43OTQtMi4wODUgMi40OTQtMy41ODIgNi44OTYtNC40NSAxMy4wODMtLjg2OCA2LjIyNi0uNTcgMTAuNjc3Ljg4NSAxMy4yMzFDOTAuODQgMzIuNjkxIDkzLjg0IDM0IDk4LjI4NiAzNGM0LjM5OCAwIDcuNjk2LTEuMjc1IDkuNzk2LTMuNzkyIDIuMDg3LTIuNDkyIDMuNTctNi44OTQgNC40MDUtMTMuMDg0Ljg5OC02LjIyNi42MTctMTAuNjc4LS44MzgtMTMuMjMxQzExMC4xNzcgMS4zMDkgMTA3LjE3NyAwIDEwMi43MzMgME0xMzguNzY5LjU4MmE3OC4zNTcgNzguMzU3IDAgMCAwLTguNzcxLS41NjZjLTEuMzU0LS4wMzItMi40Ny0uMDE2LTMuMzE0LjA0N2ExNi4xIDE2LjEgMCAwIDAtMi43NjcuNDc5Yy0xLjAwMy4yNi0xLjgxNi42NjQtMi40MTYgMS4yLS42LjUzOC0xLjE0NSAxLjI4OS0xLjYyMiAyLjIzMS0uNDc3LjkzOC0uODE4IDIuMTI2LTEuMDEyIDMuNTM3LS4yNTUgMi4yMzcgMCA0LjAxMi43NTcgNS4yNzMuNzYgMS4yNiAyLjMwNSAyLjQgNC41OTUgMy4zODZsNy4wNTQgMi45NjZjMS45MjIuODU4IDMuMTc5IDEuNzU5IDMuNzM3IDIuNjc2LjU1LjkwOS42OTEgMi4zNi40MTkgNC4zMDYtLjQyNyAyLjYyMy0xLjMzNCA0LjM0LTIuNjk2IDUuMTA2LTEuMzk1Ljc4Mi0zLjcxMiAxLjIwOS02Ljg4MiAxLjI2OC0zLjA2NS4wMi02LjIxMy0uMDgtOS4zOS0uMzI5bC0uMTg2LS4wMTQtLjI3NSAxLjMwNy4yMy4wMjZjMi44NzguMzQ1IDUuODk1LjUxOSA4Ljk2NC41MTkgMS41MDUgMCAyLjc0Ni0uMDM5IDMuNjg4LS4xMTcuOTUtLjA4IDEuOTUyLS4yNTYgMi45NzUtLjUyNCAxLjA1LS4yNzYgMS44OTUtLjY5NSAyLjUxLTEuMjUxLjYxLS41NDMgMS4xNzItMS4zMDEgMS42Ny0yLjI1LjQ5Ny0uOTQ2Ljg0NS0yLjExNyAxLjAzNS0zLjQ4Ni4zMTgtMi4zNjguMDg2LTQuMTg1LS42OS01LjQtLjc4MS0xLjIyNS0yLjM4LTIuMzU1LTQuODk2LTMuNDU0bC03LjA1LTIuOTY1Yy0xLjc2Ny0uNzk0LTIuOTItMS42ODgtMy40MjYtMi42NjItLjUxMy0uOTgtLjY4LTIuMzc0LS40OTYtNC4xNC4xNTQtMS4yLjQzMS0yLjIxNi44MjYtMy4wMi4zOTItLjgwNS44Mi0xLjQxNyAxLjI3LTEuODIyLjQ0LS40IDEuMDY3LS43MDcgMS44NjMtLjkyLjgwOC0uMjEzIDEuNTI0LS4zNDUgMi4xMjQtLjM5Mi42MDktLjA0NiAxLjQ2NS0uMDY5IDIuNTUtLjA2OSAyLjU1NCAwIDUuNzE1LjEyNiA5LjM5Mi4zNzdsLjE4Ni4wMTJMMTM5IC42MWwtLjIzMS0uMDI4ek04Ny43MTggMWgtNy4yMzdMNzMuMDMgMTkuODgxbC0xLjYxIDQuMDc1Yy0uNTQ0IDEuMzktLjk0IDIuNDA3LTEuMzgyIDMuNTE5LS4wOTguMjQ1LS4yMDcuMjg1LS4zNzMuMjg1aC0uMTg4Yy0uMTMzIDAtLjI0Ni0uMDY4LS4yNzUtLjI3My0uMTExLS43OTMtLjIyNS0xLjUyNC0uMzMtMi4yNjItLjA1Ni0uNDAxLS4xMTUtLjgtLjE1OC0xLjIyTDY2LjE5MSAxSDU5bDQuNTc2IDI5Ljk2YTIuMjUgMi4yNSAwIDAgMCAuNzQ3IDEuNDM4Yy4wMDUuMDA1LjAxLjAwNi4wMTYuMDEuNDMzLjM5Mi45NDIuNTkyIDEuNTI2LjU5Mmg2LjQ0NGMxLjIxNSAwIDIuMDctLjYwMiAyLjU2OS0xLjgwOEw4OCAxaC0uMjgyeiIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K",
								name: "RevOS",
								details:
									"RevOS is a Smart Mobility Platform for Next-Gen Vehicles with an AI-enabled IoT Solution making them smartest on the road, using vehicle control, analysis and visualization.",
							},
							{
								img: "https://www.nextstem.com/wp-content/uploads/2017/03/logo.png",
								name: "NexStem",
								details:
									"NexStem is a technology platform where the signals from the human brain could be collected, processed, and analysed to determine the pattern of thoughts.",
							},
							{
								img: "https://quizizz.com/_media/quizzes/246d162c-4158-43da-a8f8-45f36d6d0ac9_900_900",
								name: "Quizziz",
								details:
									"Quizziz provide set of free tools to teach and learn anything, on any device, in‑person or remotely.",
							},
							{
								img: "https://www.talasecurity.io/wp-content/uploads/2020/06/logo.png",
								name: "Tala Security",
								details:
									"Tala Security helps enterprises protect sensitive data, enhance visibility, and eliminate client-side attacks.",
							},
							{
								img: "https://www.filmboardmovies.com/assets/uploads/logo/logo.png",
								name: "Filmboard Movies",
								details:
									"Filmboard is an omni-channel B2B marketplace for film production services where buyers (producers/filmmakers) can book any film-related requirement anywhere in India.",
							},
							{
								img:
									"https://static.wixstatic.com/media/af50a2_b3cbe5b2d4744fae90a1799f0add6a87~mv2.png/v1/fill/w_220,h_41,al_c,q_85,usm_0.66_1.00_0.01/af50a2_b3cbe5b2d4744fae90a1799f0add6a87~mv2.webp",
								name: "YourPhysio",
								details:
									"YourPhysio is a healthcare services startup delivering physiotherapy care digitally via Tele Consultation, Live Treatment Session & App-based tracking. ",
							},
						].map((i, k) => (
							<>
								<div
									className="col-lg-3 col-sm-4 col-11 mx-1 my-4 card1"
									style={{ textAlign: "center" }}
								>
									<div class="card__side card__side--back">
										<div className="row p-4">
											<h3 className="mt-2 col-12" style={{ color: "black" }}>
												{i.name}
											</h3>
											<p className="col-12" style={{ color: "black" }}>
												{i.details}
											</p>
										</div>
									</div>

									<div class="card__side card__side--front">
										<img src={i.img} alt="img" style={{ maxHeight: "70%", maxWidth: "80%" }} />
									</div>
								</div>
							</>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
