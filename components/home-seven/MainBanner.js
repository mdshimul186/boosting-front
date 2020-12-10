import React, { Component } from 'react';
import Link from 'next/link'
import ReactWOW from 'react-wow'

class MainBanner extends Component {
    render() {
        return (
            <div className="ml-main-banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
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
                            <div className="ml-banner-single-image">
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