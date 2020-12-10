import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

export default function ServicesContent() {
    return (
        <section className="services-area-two ptb-80 bg-f9f6f6">
			<div className="container">
				<div className="section-title">
					<h2>Our Services</h2>
					<div className="bar"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon">
                                <Icon.Settings />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Incredible Infrastructure</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon">
                                <Icon.Mail />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Email Notifications</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon">
                                <Icon.Bell />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Best Analytics Audits</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-c679e3">
                                <Icon.Grid />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Simple Dashboard</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">

                            <div className="icon bg-c679e3">
                                <Icon.Info />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Information Retrieval</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-c679e3">
                                <Icon.HardDrive />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Deep Technical SEO</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-eb6b3d">
                                <Icon.Compass />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Drag and Drop Functionality</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-eb6b3d">
                                <Icon.Bell />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Deadline Reminders</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-eb6b3d">
                                <Icon.Send />
							</div>

							<h3>
								<Link href="/service-details">
									<a>Modern Keyword Analysis</a>
								</Link>
							</h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
