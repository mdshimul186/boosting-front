import React, { Component } from 'react';
import * as Icons from 'react-feather';

class Features extends Component {
    render() {
        return (
            <section className="hosting-features-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Features</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-hosting-features">
                                <div className="icon">
                                    <Icons.Settings />
                                </div>

                                <h3>Incredible Infrastructure</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-hosting-features">
                                <div className="icon bg-c679e3">
                                    <Icons.Info />
                                </div>

                                <h3>Information Retrieval</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-hosting-features">
                                <div className="icon">
                                    <Icons.Bell />
                                </div>

                                <h3>Best Analytics Audits</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-hosting-features">
                                <div className="icon bg-c679e3">
                                    <Icons.Grid />
                                </div>

                                <h3>Simple Dashboard</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-hosting-features">
                                <div className="icon">
                                    <Icons.Mail />
                                </div>

                                <h3>Email Notifications</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-hosting-features">
                                <div className="icon bg-c679e3">
                                    <Icons.HardDrive />
                                </div>

                                <h3>Deep Technical SEO</h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
