import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <section className="iot-main-banner">
                <div className="container">
                    <div className="iot-banner-content">
                        <span>Internet of Things</span>
                        <h2>We get it! IoT growth is happening</h2>
                        <p>At this point, it may seem like overkill to point out the continued growth bound to happen in the Internet of Things space for the years to come and how it will create new opportunities for companies, both established and new, from a hardware and software perspective.</p>
                        <Link href="#">
                            <a className="btn btn-primary">Get Started</a>
                        </Link>
                    </div>

                    <div className="iot-banner-image">
                        <ReactWOW delay='0.8s' animation='fadeInUp'>
                            <img 
                                src={require('../../static/images/iot-banner-image/iot-main-img1.png')}
                                className="wow fadeInUp" 
                                data-wow-delay="0.8s" alt="image"
                            />
                        </ReactWOW>
                        <ReactWOW animation='zoomIn'>
                            <img 
                                src={require('../../static/images/iot-banner-image/iot-shape1.png')} 
                                className="wow zoomIn" 
                                alt="image"
                            />
                        </ReactWOW>
                    </div>

                    <div className="animate-border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
        </section>
        );
    }
}

export default MainBanner;
