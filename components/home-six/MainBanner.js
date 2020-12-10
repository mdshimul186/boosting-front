import React, { Component } from 'react';
import Link from 'next/link'
import ReactWOW from 'react-wow'

class MainBanner extends Component {
    render() {
        return (
            <div className="ml-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="ml-banner-content">
                                <h1>World’s Leading AI & Machine Learning Company</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link href="#">
                                    <a className="btn btn-secondary">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="ml-banner-image">
                                <ReactWOW delay='2s' animation='fadeIn'>
                                    <img src={require("../../static/images/ml-banner-image/one.png")} className="wow fadeIn" data-wow-delay="2s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='1s' animation='fadeInUp'>
                                    <img src={require("../../static/images/ml-banner-image/two.png")} className="wow fadeInUp" data-wow-delay="1s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='0.5s' animation='fadeInUp'>
                                    <img src={require("../../static/images/ml-banner-image/three.png")} className="wow fadeInUp" data-wow-delay="0.5s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='2s' animation='fadeInUp'>
                                    <img src={require("../../static/images/ml-banner-image/four.png")} className="wow fadeInUp" data-wow-delay="2s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='2.5s' animation='fadeInDown'>
                                    <img src={require("../../static/images/ml-banner-image/five.png")} className="wow fadeInDown" data-wow-delay="2.5s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='2s' animation='fadeInDown'>
                                    <img src={require("../../static/images/ml-banner-image/six.png")} className="wow fadeInDown" data-wow-delay="1.9s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='2.1s' animation='fadeInDown'>
                                    <img src={require("../../static/images/ml-banner-image/seven.png")} className="wow fadeInDown" data-wow-delay="2.1s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='1.9s' animation='fadeInDown'>
                                    <img src={require("../../static/images/ml-banner-image/eight.png")} className="wow fadeInDown" data-wow-delay="1.9s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='1.7s' animation='fadeInDown'>
                                    <img src={require("../../static/images/ml-banner-image/nine.png")} className="wow fadeInDown" data-wow-delay="1.7s" alt="image" />
                                </ReactWOW>
                                
                                <ReactWOW delay='1.5s' animation='fadeInDown'>
                                    <img src={require("../../static/images/ml-banner-image/ten.png")} className="wow fadeInDown" data-wow-delay="1.5s" alt="image" />
                                </ReactWOW>
                                
                                <ReactWOW delay='0.4s' animation='fadeInUp'>
                                    <img src={require("../../static/images/ml-banner-image/eleven.png")} className="wow fadeInUp" data-wow-delay="0.4s" alt="image" />
                                </ReactWOW>

                                <ReactWOW delay='0.5s' animation='fadeInUp'>
                                    <img src={require("../../static/images/ml-banner-image/ml-main-pic.png")} className="wow fadeInUp" data-wow-delay="0.5s" alt="image" />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src={require("../../static/images/shape1.png")} alt="shape" />
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

export default MainBanner;