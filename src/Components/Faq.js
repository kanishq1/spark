import React from "react";

export default function Faq() {
	const faq = [
		{
			question: "Non consectetur a erat nam at lectus urna duis?",
			answer:
				"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
		},
		{
			question: "Non consectetur a erat nam at lectus urna duis?",
			answer:
				"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
		},
		{
			question: "Non consectetur a erat nam at lectus urna duis?",
			answer:
				"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
		},
		{
			question: "Non consectetur a erat nam at lectus urna duis?",
			answer:
				"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
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
