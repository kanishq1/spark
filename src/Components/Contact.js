import React from "react";

export default function ContactComponent() {
	return (
		<>
			<section id="contact" className="contact mt-5">
				<div className="container mt-4">
					<div className="section-title" data-aos="fade-up">
						<h2>Contact Us</h2>
						<p>Contact us the get started</p>
					</div>
					<div className="row justify-content-center">
						{/* <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
							<div className="info">
								<div className="address">
									<i className="icofont-google-map" />
									<h4>Location:</h4>
									<p>A108 Adam Street, New York, NY 535022</p>
								</div>
								<div className="email">
									<i className="icofont-envelope" />
									<h4>Email:</h4>
									<p>info@example.com</p>
								</div>
								<div className="phone">
									<i className="icofont-phone" />
									<h4>Call:</h4>
									<p>+1 5589 55488 55s</p>
								</div>
							</div>
						</div> */}
						<div
							className="col-lg-9 mt-5 mt-lg-0 d-flex align-items-stretch"
							data-aos="fade-up"
							data-aos-delay={200}
						>
							<form action="forms/contact.php" method="post" className="php-email-form">
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="name">Your Name</label>
										<input
											type="text"
											name="name"
											className="form-control"
											id="name"
											data-rule="minlen:4"
											data-msg="Please enter at least 4 chars"
										/>
										<div className="validate" />
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="name">Your Email</label>
										<input
											type="email"
											className="form-control"
											name="email"
											id="email"
											data-rule="email"
											data-msg="Please enter a valid email"
										/>
										<div className="validate" />
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="name">Subject</label>
									<input
										type="text"
										className="form-control"
										name="subject"
										id="subject"
										data-rule="minlen:4"
										data-msg="Please enter at least 8 chars of subject"
									/>
									<div className="validate" />
								</div>
								<div className="form-group">
									<label htmlFor="name">Message</label>
									<textarea
										className="form-control"
										name="message"
										rows={10}
										data-rule="required"
										data-msg="Please write something for us"
										defaultValue={""}
									/>
									<div className="validate" />
								</div>
								<div className="mb-3">
									<div className="loading">Loading</div>
									<div className="error-message" />
									<div className="sent-message">Your message has been sent. Thank you!</div>
								</div>
								<div className="text-center">
									<button type="submit">Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
