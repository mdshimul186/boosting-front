import React from 'react'

export default function About() {
    return (
        <section className="about-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<img src={require("../../static/images/about-one.png")} alt="image" />
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<div className="section-title">
								<h2>About Us</h2>
								<div className="bar"></div>
								<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec nteger nonsed condimntum elit, sit amet feugiat lorem. Proin tempus sagittis velit vitae scelerisque.</p>

							<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>

							<p>Business-to-business metrics analytics value proposition funding angel investor entrepreneur alpha ramen equity gamification. Social proof partner network research.</p>
						</div>
					</div>
				</div>

				<div className="about-inner-area">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our History</h3>
								<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our Mission</h3>
								<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="about-text">
								<h3>Who we are</h3>
								<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}