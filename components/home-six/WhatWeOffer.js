import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class WhatWeOffer extends Component {
    render() {
        return (
            <section className="solutions-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">What We Offer</span>
                        <h2>Our Featured Solutions</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src={require("../../static/images/icon4.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Robotic Automation</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

                                <Link href="#">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src={require("../../static/images/icon5.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Cognitive Automation</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="#">
                                    <a className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src={require("../../static/images/icon6.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Cognitive Engagement</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="#">
                                    <a className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src={require("../../static/images/icon7.png")} alt="image" />
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Security & Surveillance</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="#">
                                    <a className="learn-more-btn">
                                        <i data-feather="plus-circle"></i> Learn More
                                    </a>
                                </Link>
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
                <div className="shape6 rotateme">
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

export default WhatWeOffer;