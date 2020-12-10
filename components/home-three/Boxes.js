import React, { Component } from 'react';
import * as Icon from 'react-feather';

class Boxes extends Component {
    render() {
        return (
            <section className="boxes-area hosting-boxes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-box">
                                <div className="icon">
                                    <Icon.DollarSign />
                                </div>
                                <h3>Money-back Guarantee</h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-f78acb">
                                <div className="icon">
                                    <Icon.Database />
                                </div>
                                <h3>Big Data Transfer</h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-c679e3">
                                <div className="icon">
                                    <Icon.BarChart />
                                </div>
                                <h3>99.9% Server Uptime</h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-eb6b3d">
                                <div className="icon">
                                    <Icon.Tablet />
                                </div>
                                <h3>Live 24/7 Support</h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Boxes;
