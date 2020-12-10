import React from 'react'
import * as Icon from 'react-feather'
import Link from 'next/link'

export default function ProjectContent() {
    return (
        <section className="works-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image1.jpg")} alt="image" />
                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image2.jpg")} alt="image" />
                                <Link href="/project-details">
                                    <a className="icon"><Icon.Settings /></a>
                                </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image3.jpg")} alt="image" />

							<Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>
							<div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image4.jpg")} alt="image" />

							<Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image5.jpg")} alt="image" />

							<Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image1.jpg")} alt="image" />

							<Link href="#">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image2.jpg")} alt="image" />

							<Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image3.jpg")} alt="image" />

							<Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="/project-details#">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={require("../../static/images/works-image/works-image4.jpg")} alt="image" />

							<Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

							<div className="works-content">
								<h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
			<div className="shape2 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
			<div className="shape7"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
			<div className="shape4"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
		</section>
    )
}
