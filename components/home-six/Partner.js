import React, { Component } from 'react';
import Link from 'next/link';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        576:{
            items:4,
        },
        768:{
            items:4,
        },
        1024:{
            items:5,
        },
        1200:{
            items:6,
        }
    }
}

class Partner extends Component {
    render() {
        return (
            <section className="ml-partner-area mt-minus-top ptb-80 pb-0">
                <div className="container">
                    <div className="row">
                        <OwlCarousel 
                            className="partner-slides"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-ml-partner">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/partner-img/partner-1.png")} alt="image" />
                                            <img src={require("../../static/images/partner-img/partner-hover1.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-ml-partner">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/partner-img/partner-2.png")} alt="image" />
                                            <img src={require("../../static/images/partner-img/partner-hover2.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-ml-partner">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/partner-img/partner-3.png")} alt="image" />
                                            <img src={require("../../static/images/partner-img/partner-hover3.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-ml-partner">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/partner-img/partner-10.png")} alt="image" />
                                            <img src={require("../../static/images/partner-img/partner-hover10.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-ml-partner">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/partner-img/partner-5.png")} alt="image" />
                                            <img src={require("../../static/images/partner-img/partner-hover5.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-ml-partner">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/partner-img/partner-6.png")} alt="image" />
                                            <img src={require("../../static/images/partner-img/partner-hover6.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-ml-partner">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/partner-img/partner-7.png")} alt="image" />
                                            <img src={require("../../static/images/partner-img/partner-hover7.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;