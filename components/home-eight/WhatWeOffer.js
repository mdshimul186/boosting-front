import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow';

class WhatWeOffer extends Component {
    render() {
        return (
            <section className="solutions-area ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">What We Offer</span>
                        <h2>Our Featured Solutions</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-landscape"></i>
                                    <img src={require("../../static/images/agency-image/agency-icon-bg.png")} alt="image" />
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Programmatic Advertising</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>

                                <Link href="#">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-bar-chart-alt"></i>
                                    <img src={require("../../static/images/agency-image/agency-icon-bg.png")} alt="image" />
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Strategy & Research</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>

                                <Link href="#">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-devices"></i>
                                    <img src={require("../../static/images/agency-image/agency-icon-bg.png")} alt="image" />
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Design & Development</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>

                                <Link href="#">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src={require("../../static/images/agency-image/agency-icon-bg.png")} alt="image" />
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Branding & Marketing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>

                                <Link href="#">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <ReactWOW delay='0.5s' animation='fadeInLeft'>
                    <div className="shape9 slow mobile-dnone">
                        <img src={require("../../static/images/agency-image/agency-shape1.png")} alt="image" />
                    </div>
                </ReactWOW>
            </section>
        );
    }
}

export default WhatWeOffer;