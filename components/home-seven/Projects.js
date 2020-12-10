import React, { Component } from 'react';
import Link from 'next/link';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        768:{
            items: 2,
        },
        1024:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    },
}

class Projects extends Component {
    render() {
        return (
            <section className="ml-projects-area pt-0 ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Proud Projects That Make Us Stand Out</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="container-fluid">
                    <OwlCarousel 
                        className="ml-projects-slides"
                        {...options}
                    >
                        <div className="single-ml-projects-box">
                            <img src={require("../../static/images/projects-img1.jpg")} alt="image" />
                            <div className="plus-icon">
                                <Link href="#">
                                    <a>
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-ml-projects-box">
                            <img src={require("../../static/images/projects-img2.jpg")} alt="image" />
                            <div className="plus-icon">
                                <Link href="#">
                                    <a>
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-ml-projects-box">
                            <img src={require("../../static/images/projects-img3.jpg")} alt="image" />
                            <div className="plus-icon">
                                <Link href="#">
                                    <a>
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-ml-projects-box">
                            <img src={require("../../static/images/projects-img4.jpg")} alt="image" />
                            <div className="plus-icon">
                                <Link href="#">
                                    <a>
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-ml-projects-box">
                            <img src={require("../../static/images/projects-img5.jpg")} alt="image" />
                            <div className="plus-icon">
                                <Link href="#">
                                    <a>
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src={require("../../static/images/shape1.png")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Projects;