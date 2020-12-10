import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="ml-services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Our Solutions</span>
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../static/images/services-image/service-image1.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>IT Professionals</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../static/images/services-image/service-image2.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Software Engineers</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../static/images/services-image/service-image3.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Health & Manufacturing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../static/images/services-image/service-image4.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Security & Surveillance</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../static/images/services-image/service-image5.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Automatic Optimization</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src={require("../../static/images/services-image/service-image6.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Data Analysts</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src={require("../../static/images/shape1.png")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Services;