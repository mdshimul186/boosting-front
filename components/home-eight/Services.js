import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <div className="agency-services-area ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">Our Solutions</span>
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src={require("../../static/images/agency-image/agency-services-img1.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>IT Professionals</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src={require("../../static/images/agency-image/agency-services-img2.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Software Engineers</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src={require("../../static/images/agency-image/agency-services-img3.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src={require("../../static/images/agency-image/agency-services-img4.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>SEO & Content</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src={require("../../static/images/agency-image/agency-services-img5.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src={require("../../static/images/agency-image/agency-services-img6.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Data Analysts</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
            </div>
        );
    }
}

export default Services;