import React from "react";

export default function Faq() {
	const faq = [
		{
			question: "What is the range of equity, and other key agreements that are pertinent to the process?",
			answer:
				"Since this is an angel network, the range of equity that the startup would have to give up would involve a discussion between the individual investors and the entrepreneurs running the startup. There is usually a 10-20% dilution in the round.",
		},
		{
			question: "What is the range of funding that the network is looking at providing?",
			answer:
				"The category is 'seed funding' for Indian start-ups. Seed funding in India is in the range of INR 2.5 million to 20 million. That is what BITS Spark Angels targets as well.",
		},
		{
			question:
				"How many investors can participate in a single deal? How is the process conducted to decide the amount that each investor invests?",
			answer:
				"The BITS Spark Angels steering committee will present the final shortlist of startups to all the angels. For instance, say one of the startups wants to raise INR 20 million, and it attracts exceptional interest from one of the investors. This investor then takes the lead on this investment and along with other interested angels, invests in this startup. A member of the BITS Spark steering committee moderates the process to ensure smooth functioning.",
		},
		{
			question: "How many startups are you looking to invest in per round?",
			answer:
				"The entire process funnels the application right up to the final shortlist which will be revealed after the final round of filtering. There is no particular limit on the startups per round and it all depends on the absolute quality of the startup",
		},
	];
	return (
		<>
			{/* ======= F.A.Q Section ======= */}
			<section id="faq" className="faq">
				<div className="container">
					<div className="section-title" data-aos="fade-up">
						<h2>F.A.Q</h2>
						<p>Frequently Asked Questions</p>
					</div>
					<ul className="faq-list">
						{faq.map((i, k) => (
							<li data-aos="fade-up" data-aos-delay={100}>
								<a data-toggle="collapse" className="collapsed" href={"#a" + k}>
									{i.question} <i className="icofont-simple-up" />
								</a>
								<div id={"a" + k} eventKey={"a" + k} className="collapse" data-parent=".faq-list">
									<p>{i.answer}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
			{/* End F.A.Q Section */}
		</>
	);
}
