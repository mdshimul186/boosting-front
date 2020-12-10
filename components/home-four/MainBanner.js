import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

class MainBanner extends Component {
    render() {
        return (
            <div className="repair-main-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-content">
                                <h1>Your Local Computer Repair Experts!</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <img 
                                    src={require('../../static/images/repair-banner-image/repair-banner-img.png')} 
                                    alt="image" 
                                />
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require('../../static/images/repair-banner-image/repair-shape1.png')} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="image" 
                                    />
                                </ReactWOW>
                                
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require('../../static/images/repair-banner-image/repair-shape2.png')} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="image" 
                                    />
                                </ReactWOW>

                                <ReactWOW animation='rotateme'>
                                    <img 
                                        src={require('../../static/images/repair-banner-image/repair-shape-circle.png')} 
                                        className="rotateme" 
                                        alt="image" 
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
