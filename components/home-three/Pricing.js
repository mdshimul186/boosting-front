import React, { Component } from 'react';
import Link from 'next/link';
import * as Icons from 'react-feather';

class Pricing extends Component {
    render() {
        return (
            <section className="pricing-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Pricing Plans</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <Icons.Database />
                                    <h3>Web Hosting</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>10.99<span>/m</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 99.9% Uptime Guarantee</li>
                                        <li><i data-feather="check"></i> Reliable & Secure</li>
                                        <li><i data-feather="check"></i> Powered by cPanel / Plesk</li>
                                        <li><i data-feather="check"></i> Web Asset Delivery</li>
                                        <li><i data-feather="check"></i> 24/7 Dedicated Support</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Select Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table active-plan">
                                <div className="pricing-header">
                                    <Icons.Cloud />
                                    <h3>Cloud Hosting</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>13.99<span>/m</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 99.9% Uptime Guarantee</li>
                                        <li><i data-feather="check"></i> Reliable & Secure</li>
                                        <li><i data-feather="check"></i> Powered by cPanel / Plesk</li>
                                        <li><i data-feather="check"></i> Web Asset Delivery</li>
                                        <li><i data-feather="check"></i> 24/7 Dedicated Support</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Select Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <Icons.DownloadCloud />
                                    <h3>Vps Hosting</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>15.99<span>/m</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 99.9% Uptime Guarantee</li>
                                        <li><i data-feather="check"></i> Reliable & Secure</li>
                                        <li><i data-feather="check"></i> Powered by cPanel / Plesk</li>
                                        <li><i data-feather="check"></i> Web Asset Delivery</li>
                                        <li><i data-feather="check"></i> 24/7 Dedicated Support</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Select Plan</a>
                                    </Link>
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
        );
    }
}

export default Pricing;
