import React from "react";

export default function Footer() {
	return (
		<>
			<footer id="footer">
				{/* <div className="footer-newsletter" data-aos="fade-up">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-6">
									<h4>Join Our Newsletter</h4>
									<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
									<form action method="post">
										<input type="email" name="email" />
										<input type="submit" defaultValue="Subscribe" />
									</form>
								</div>
							</div>
						</div>
					</div> */}
				<div className="footer-top" style={{ background: "#fef8f5" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 footer-contact" data-aos="fade-up" data-aos-delay={100}>
								<a href="/">
									<img
										style={{ marginTop: "-10px" }}
										src="https://ik.imagekit.io/enactus/spark-removebg-preview_gpu1GZxEl.png"
										alt=""
										className="img-fluid"
									/>
								</a>
								<p>
									A108 Adam Street <br />
									New York, NY 535022
									<br />
									United States <br />
									<br />
									<strong>Phone:</strong> +1 5589 55488 55
									<br />
									<strong>Email:</strong> info@example.com
									<br />
								</p>
							</div>
							<div
								className="col-lg-2 col-md-6 footer-links"
								data-aos="fade-up"
								data-aos-delay={300}
							></div>
							<div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay={200}>
								<h4>Useful Links</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right" /> <a href="/">Home</a>
									</li>
									<li>
										<i className="bx bx-chevron-right" /> <a href="/">About us</a>
									</li>
									<li>
										<i className="bx bx-chevron-right" /> <a href="/">Services</a>
									</li>
									<li>
										<i className="bx bx-chevron-right" /> <a href="/">Terms of service</a>
									</li>
									<li>
										<i className="bx bx-chevron-right" /> <a href="/">Privacy policy</a>
									</li>
								</ul>
							</div>
							<div
								className="col-lg-1 col-md-6 footer-links"
								data-aos="fade-up"
								data-aos-delay={300}
							></div>
							<div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay={400}>
								<h4>Our Social Networks</h4>
								<p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
								<div className="social-links mt-3">
									<a href="/" className="twitter">
										<i className="bx bxl-twitter" />
									</a>
									<a href="/" className="facebook">
										<i className="bx bxl-facebook" />
									</a>
									<a href="/" className="instagram">
										<i className="bx bxl-instagram" />
									</a>
									<a href="/" className="google-plus">
										<i className="bx bxl-skype" />
									</a>
									<a href="/" className="linkedin">
										<i className="bx bxl-linkedin" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container py-4">
					<div className="copyright">
						© Copyright{" "}
						<strong>
							<span>BITS Spark</span>
						</strong>
						. All Rights Reserved
					</div>
					<div className="credits">
						{/* All the links in the footer should remain intact. */}
						{/* You can delete the links only if you purchased the pro version. */}
						{/* Licensing information: https://bootstrapmade.com/license/ */}
						{/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ */}
						Designed by <a href="/">Kanishq Khandelwal</a>
					</div>
				</div>
			</footer>
		</>
	);
}
