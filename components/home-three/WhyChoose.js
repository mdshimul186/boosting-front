import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class WhyChoose extends Component {
    render() {
        return (
            <section className="why-choose-us ptb-80 pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h2>Why Choose Us</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="why-choose-us-image">
                                <ReactWOW animation='fadeInLeft'>
                                    <img 
                                        src={require("../../static/images/why-choose-us-image/man-stand.png")}
                                        className="wow fadeInLeft" 
                                        alt="image"
                                    />
                                </ReactWOW>
                                <ReactWOW animation='fadeInRight'>
                                    <img 
                                        src={require("../../static/images/why-choose-us-image/database.png")}
                                        className="wow fadeInRight" 
                                        alt="image"
                                    />
                                </ReactWOW>
                                <ReactWOW animation='rotateme'>
                                    <img 
                                        src={require("../../static/images/services-left-image/cercle-shape.png")}
                                        className="rotateme" 
                                        alt="image"
                                    />
                                </ReactWOW>
                                <ReactWOW animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/why-choose-us-image/main-static.png")}
                                        className="main-pic" 
                                        alt="image"
                                    />
                                </ReactWOW>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-team"></i>
                                        </div>
                                        <h3>Proficient & Friendly</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-rocket"></i>
                                        </div>
                                        <h3>Extremely Fast</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-shield"></i>
                                        </div>
                                        <h3>100% Safe & Security</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-diamond"></i>
                                        </div>
                                        <h3>Top-Rated</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChoose;
