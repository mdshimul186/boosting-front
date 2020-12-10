import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="cta-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="cta-content">
                                <h3>Sign up for web hosting today!</h3>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                            <div className="cta-right-content">
                                <div className="hosting-price">
                                    <span>Starting at only</span>
                                    <h4>$4.75/mo*</h4>
                                </div>

                                <div className="buy-btn">
                                    <Link href="#">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
