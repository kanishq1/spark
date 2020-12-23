import React from "react";

export default function Footer() {
	return (
		<>
			<footer id="footer">
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
							</div>
							<div className="col-lg-6"></div>
							<div
								className="col-lg-3 col-md-6 footer-links"
								style={{ textAlign: "center" }}
								data-aos="fade-up"
								data-aos-delay={400}
							>
								<div className="social-links mt-3">
									<a href="https://www.facebook.com/bitsspark/" className="facebook">
										<i className="bx bxl-facebook" />
									</a>
									<a href="https://www.linkedin.com/company/bits-spark" className="linkedin">
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
						Designed by <a href="/">Kanishq Khandelwal</a>
					</div>
				</div>
			</footer>
		</>
	);
}
